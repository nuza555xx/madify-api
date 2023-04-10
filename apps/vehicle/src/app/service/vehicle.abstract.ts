import {
  IGetVehicleList,
  IResponseVehicle,
  ResponseDto,
} from '@madify-api/database';

export abstract class VehicleService {
  abstract listVehicle(
    query: IGetVehicleList
  ): Promise<ResponseDto<IResponseVehicle[]>>;
}
