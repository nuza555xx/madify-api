import {
  ICreateVehicle,
  IGetVehicleList,
  IRepository,
  IResponseVehicle,
  Meta,
  PayloadResponse,
  REPOSITORY_PROVIDE,
  ResponseDto,
} from '@madify-api/database';
import { MadifyException } from '@madify-api/utils/exception';
import { STORAGE_PROVIDE, StorageService } from '@madify-api/utils/provider';
import { Inject, Injectable } from '@nestjs/common';
import { QueryOptions } from 'mongoose';
import { VehicleService } from './vehicle.abstract';

@Injectable()
export class VehicleImpl implements VehicleService {
  constructor(
    @Inject(REPOSITORY_PROVIDE) private readonly repository: IRepository,
    @Inject(STORAGE_PROVIDE) private readonly storage: StorageService
  ) {}

  async createVehicle(
    body: ICreateVehicle,
    accountId: string
  ): Promise<IResponseVehicle> {
    const vehicle = await this.repository.createVehicle({
      ...body,
      accountId: accountId,
    });

    if (!vehicle) throw new MadifyException('SOMETHING_WRONG');

    return PayloadResponse.toVehicleResponse(vehicle);
  }

  async listVehicle({
    skip = 0,
    limit,
    ...query
  }: IGetVehicleList): Promise<ResponseDto<IResponseVehicle[]>> {
    const queryOptions: QueryOptions = {
      skip: skip,
      limit: limit,
    };

    const vehicles = await this.repository.findVehicles(
      {
        ...query,
        //  visibility: EntityVisibility.Publish
      },
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
