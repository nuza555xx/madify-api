import {
  ICreateVehicle,
  IGetVehicleList,
  IResponseProfile,
  IResponseVehicle,
  IUpdateProfile,
  ResponseDto,
} from '@madify-api/interface';

export abstract class UserService {
  abstract getProfile(accountId: string): Promise<IResponseProfile>;
  abstract updateProfile(
    body: IUpdateProfile,
    accountId: string
  ): Promise<IResponseProfile>;

  abstract createVehicle(
    body: ICreateVehicle,
    accountId: string
  ): Promise<IResponseVehicle>;

  abstract listVehicle(
    query: IGetVehicleList,
    accountId: string
  ): Promise<ResponseDto<IResponseVehicle[]>>;
}
