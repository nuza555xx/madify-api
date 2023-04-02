import {
  IGetVehicleList,
  IResponseVehicle,
  ResponseDto,
} from '@madify-api/interface';

export abstract class VehicleService {
  abstract listVehicle(
    query: IGetVehicleList
  ): Promise<ResponseDto<IResponseVehicle[]>>;
}
