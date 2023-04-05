import {
  AnyKeys,
  QueryOptions,
  SaveOptions,
  Types,
  UpdateQuery,
  UpdateWriteOpResult,
} from 'mongoose';
import { Account } from '../schema/account.schema';
import { Province } from '../schema/province.model.schema';
import { VehicleBrand } from '../schema/vehicle.brand.schema';
import { VehicleModel } from '../schema/vehicle.model.schema';
import { Vehicle } from '../schema/vehicle.schema';
import {
  AccountQuery,
  ProvinceQuery,
  VehicleBrandQuery,
  VehicleModelQuery,
  VehicleQuery,
} from './repository.interface';

export type ResultAccount = Account & {
  _id: Types.ObjectId;
};

export type ResultVehicle = Vehicle & {
  _id: Types.ObjectId;
};

export type ResultVehicleBrand = VehicleBrand & {
  _id: Types.ObjectId;
};

export type ResultVehicleModel = VehicleModel & {
  _id: Types.ObjectId;
};

export type ResultProvince = Province & {
  _id: Types.ObjectId;
};

export abstract class IRepository {
  abstract createAccount(
    account: AnyKeys<Account>,
    queryOptions?: SaveOptions
  ): Promise<ResultAccount>;

  abstract updateAccount(
    filter: AccountQuery,
    updateQuery: UpdateQuery<Account>
  ): Promise<UpdateWriteOpResult>;

  abstract findAccount(
    account: AccountQuery,
    queryOptions?: QueryOptions
  ): Promise<ResultAccount>;

  abstract createVehicle(
    vehicle: AnyKeys<Vehicle>,
    queryOptions?: SaveOptions
  ): Promise<ResultVehicle>;

  abstract findVehicle(
    vehicle: VehicleQuery,
    queryOptions?: QueryOptions
  ): Promise<ResultVehicle>;

  abstract findVehicles(
    vehicle: VehicleQuery,
    queryOptions?: QueryOptions
  ): Promise<ResultVehicle[]>;

  abstract countVehicles(
    vehicle: VehicleQuery,
    queryOptions?: QueryOptions
  ): Promise<number>;

  abstract findVehicleBrand(
    vehicleBrand: VehicleBrandQuery,
    queryOptions?: QueryOptions
  ): Promise<ResultVehicleBrand>;

  abstract findVehicleBrands(
    vehicleBrand: VehicleBrandQuery,
    queryOptions?: QueryOptions
  ): Promise<ResultVehicleBrand[]>;

  abstract findVehicleModel(
    vehicleModel: VehicleModelQuery,
    queryOptions?: QueryOptions
  ): Promise<ResultVehicleModel>;

  abstract findVehicleModels(
    vehicleModel: VehicleModelQuery,
    queryOptions?: QueryOptions
  ): Promise<ResultVehicleModel[]>;

  abstract findProvince(
    province: ProvinceQuery,
    queryOptions?: QueryOptions
  ): Promise<ResultProvince>;

  abstract findProvinces(
    province: ProvinceQuery,
    queryOptions?: QueryOptions
  ): Promise<ResultProvince[]>;
}
