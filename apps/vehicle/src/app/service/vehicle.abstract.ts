import {
  GetVehicleList,
  ResponseDto,
  ResponseVehicle,
  ResponseVehicleBrand,
  ResponseVehicleModel,
} from '@madify-api/database';

export abstract class VehicleService {
  abstract listVehicle(
    query: GetVehicleList
  ): Promise<ResponseDto<ResponseVehicle[]>>;

  abstract listVehicleBrand(): Promise<ResponseVehicleBrand[]>;

  abstract listVehicleModel(brand: string): Promise<ResponseVehicleModel[]>;
}
