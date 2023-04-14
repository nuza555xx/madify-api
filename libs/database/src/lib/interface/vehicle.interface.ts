import { Types } from 'mongoose';
import { BaseSchema } from '../schema/base.schema';
import { Province } from '../schema/province.model.schema';
import { VehicleBrand } from '../schema/vehicle.brand.schema';
import { VehicleModel } from '../schema/vehicle.model.schema';

export interface IGetVehicleList {
  search?: string;
  skip: number;
  limit: number;
  sorting?: string;
}

export class IVehicle extends BaseSchema {
  accountId: Types.ObjectId;
  insureId: Types.ObjectId;
  brand: VehicleBrand;
  model: VehicleModel;
  expiredYear: number;
  insureRangeAmount?: number;
  vehicleRegistration: string;
  registrationProvince: Province;
  imageKey?: string;
}
