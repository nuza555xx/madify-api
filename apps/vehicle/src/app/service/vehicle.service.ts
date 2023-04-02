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

@Injectable()
export class VehicleImpl implements VehicleService {
  constructor(
    @Inject(REPOSITORY_PROVIDE) private readonly repository: IRepository
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
      { ...query, accountId },
      queryOptions
    );

    return ResponseDto.ok<IResponseVehicle[]>({
      payload: vehicles.map((e) => PayloadResponse.toVehicleResponse(e)),
      meta: Meta.fromDocuments(vehicles, page, limit),
    });
  }
}
