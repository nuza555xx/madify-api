import {
  ICreateVehicle,
  IGetVehicleList,
  IResponseProfile,
  IResponseVehicle,
  IUpdateProfile,
  Meta,
  ResponseDto,
} from '@madify-api/interface';
import {
  REPOSITORY_PROVIDE,
  IRepository,
  PayloadResponse,
} from '@madify-api/database';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UserService } from './user.abstract';
import { MadifyException } from '@madify-api/exception';
import { QueryOptions } from 'mongoose';
import { MadifyPagination } from '@madify-api/common';

@Injectable()
export class UserImpl implements UserService {
  constructor(
    @Inject(REPOSITORY_PROVIDE) private readonly repository: IRepository
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
      accountId: accountId,
    });

    if (!vehicle) throw new MadifyException('SOMETHING_WRONG');

    return PayloadResponse.toVehicleResponse(vehicle);
  }

  async listVehicle(
    { page, limit, ...query }: IGetVehicleList,
    accountId: string
  ): Promise<ResponseDto<IResponseVehicle[]>> {
    const skip = MadifyPagination.skip(page, limit);
    const queryOptions: QueryOptions = {
      skip: skip,
      limit: limit,
      projection: {
        brand: 1,
        generation: 1,
        identify: 1,
      },
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
