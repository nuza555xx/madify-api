import {
  CreateVehicle,
  GetVehicleList,
  ResponseDto,
  ResponseProfile,
  ResponseVehicle,
  UpdateProfile,
} from '@madify-api/database';

export abstract class UserService {
  abstract getProfile(accountId: string): Promise<ResponseProfile>;
  abstract updateProfile(
    body: UpdateProfile,
    accountId: string
  ): Promise<ResponseProfile>;

  abstract createVehicle(
    body: CreateVehicle,
    accountId: string
  ): Promise<ResponseVehicle>;

  abstract listVehicle(
    query: GetVehicleList,
    accountId: string
  ): Promise<ResponseDto<ResponseVehicle[]>>;
}
