import { EntityVisibility } from '@madify-api/enum';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { VehicleService } from './vehicle.abstract';
import {
  IGetVehicleList,
  ResponseDto,
  IResponseVehicle,
  Meta,
  ICreateVehicle,
} from '@madify-api/interface';
import {
  REPOSITORY_PROVIDE,
  IRepository,
  Vehicle,
  PayloadResponse,
} from '@madify-api/database';
import { MadifyPagination } from '@madify-api/common';
import { QueryOptions, Types } from 'mongoose';
import { MadifyException } from '@madify-api/exception';
import { STORAGE_PROVIDE, StorageService } from '@madify-api/gcp';

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
