import {
  EntityVisibility,
  ICreateVehicle,
  IGetVehicleList,
  IRepository,
  IResponseProfile,
  IResponseVehicle,
  IUpdateProfile,
  Meta,
  PayloadResponse,
  REPOSITORY_PROVIDE,
  ResponseDto,
} from '@madify-api/database';
import { MadifyException } from '@madify-api/utils/exception';
import { STORAGE_PROVIDE, StorageService } from '@madify-api/utils/provider';
import { Inject, Injectable } from '@nestjs/common';
import { QueryOptions, Types } from 'mongoose';
import { UserService } from './user.abstract';

@Injectable()
export class UserImpl implements UserService {
  constructor(
    @Inject(REPOSITORY_PROVIDE) private readonly repository: IRepository,
    @Inject(STORAGE_PROVIDE) private readonly storage: StorageService
  ) {}

  async getProfile(accountId: string): Promise<IResponseProfile> {
    const account = await this.repository.findAccount({ id: accountId });
    if (!account) {
      throw new MadifyException('NOT_FOUND_DATA');
    }

    return {
      email: account.email,
      displayName: account.displayName,
      mobile: account.mobile,
    };
  }

  async updateProfile(
    body: IUpdateProfile,
    accountId: string
  ): Promise<IResponseProfile> {
    const account = await this.repository.findAccount({ id: accountId });
    if (!account) {
      throw new MadifyException('NOT_FOUND_DATA');
    }

    account.set(body);
    await account.save();

    return PayloadResponse.toProfileResponse(account);
  }

  async createVehicle(
    body: ICreateVehicle,
    accountId: string
  ): Promise<IResponseVehicle> {
    const vehicle = await this.repository.createVehicle({
      ...body,
      accountId: new Types.ObjectId(accountId),
      visibility: EntityVisibility.Pending,
    });

    if (body.image)
      vehicle.imageKey = await this.storage.uploadFile(
        `vehicle/${vehicle.id}/${vehicle.id}`,
        body.image
      );

    if (!vehicle) throw new MadifyException('SOMETHING_WRONG');

    const image = body.image
      ? await this.storage.generateSignedUrl(vehicle.imageKey)
      : null;

    await vehicle.save();
    return PayloadResponse.toVehicleResponse(vehicle, { imageUrl: image });
  }

  async listVehicle(
    { skip, limit, ...query }: IGetVehicleList,
    accountId: string
  ): Promise<ResponseDto<IResponseVehicle[]>> {
    const queryOptions: QueryOptions = {
      skip: skip,
      limit: limit,
    };

    const vehicles = await this.repository.findVehicles(
      { ...query, accountId },
      queryOptions
    );

    const vehiclesResponse = await Promise.all(
      vehicles.map(async (vehicle) => {
        const [image, brand, model, province] = await Promise.all([
          this.storage.generateSignedUrl(vehicle.imageKey),
          this.repository.findVehicleBrand({
            slug: vehicle.brand,
          }),
          this.repository.findVehicleModel({
            slug: vehicle.model,
          }),
          this.repository.findProvince({
            slug: vehicle.registrationProvince,
          }),
        ]);

        return PayloadResponse.toVehicleResponse(vehicle, {
          vehicleImage: image,
          brand: brand.name,
          model: model.name,
          registrationProvince: province.name,
        });
      })
    );

    return ResponseDto.ok<IResponseVehicle[]>({
      payload: vehiclesResponse,
      meta: Meta.fromDocuments(vehicles, skip, limit),
    });
  }
}
