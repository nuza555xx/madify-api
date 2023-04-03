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

  async listVehicle(
    { page, limit, ...query }: IGetVehicleList,
    accountId?: string
  ): Promise<ResponseDto<IResponseVehicle[]>> {
    const skip = MadifyPagination.skip(page, limit);
    const queryOptions: QueryOptions = {
      skip: skip,
      limit: limit,
    };

    const vehicles = await this.repository.findVehicles(
      {
        ...query,
        accountId,
        //  visibility: EntityVisibility.Publish
      },
      queryOptions
    );

    const vehiclesResponse = await Promise.all(
      vehicles.map(async (e) => {
        const image = await this.storage.generateSignedUrl(e.imageKey);
        return PayloadResponse.toVehicleResponse(e, { image });
      })
    );

    return ResponseDto.ok<IResponseVehicle[]>({
      payload: vehiclesResponse,
      meta: Meta.fromDocuments(vehicles, page, limit),
    });
  }
}
