import { AccountQuery, VehicleQuery } from './repository.interface';
import {
  AnyKeys,
  QueryOptions,
  SaveOptions,
  Types,
  UpdateQuery,
  UpdateWriteOpResult,
} from 'mongoose';
import { Account } from '../schema/account.schema';
import { Vehicle } from '../schema/vehicle.schema';

export type ResultAccount = Account & {
  _id: Types.ObjectId;
};

export type ResultVehicle = Vehicle & {
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
}
