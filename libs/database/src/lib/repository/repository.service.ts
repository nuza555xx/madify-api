import { Vehicle } from './../schema/vehicle.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  AnyKeys,
  Model,
  QueryOptions,
  SaveOptions,
  UpdateQuery,
  UpdateWriteOpResult,
} from 'mongoose';
import { Account } from '../schema/account.schema';
import {
  IRepository,
  ResultAccount,
  ResultProvince,
  ResultVehicle,
  ResultVehicleBrand,
  ResultVehicleModel,
} from './repository.abstract';
import { PrepareQuery } from './repository.query';
import { Otp } from '../schema/otp.schema';
import { VehicleBrand } from '../schema/vehicle.brand.schema';
import { VehicleModel } from '../schema/vehicle.model.schema';
import { Province } from '../schema/province.model.schema';

@Injectable()
export class RepositoryImpl implements IRepository {
  private filters = new PrepareQuery();
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
    @InjectModel(Province.name) private provinceModel: Model<Province>,
    @InjectModel(Otp.name) private otpModel: Model<Otp>,
    @InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>,
    @InjectModel(VehicleBrand.name)
    private vehicleBrandModel: Model<VehicleBrand>,
    @InjectModel(VehicleModel.name)
    private vehicleModelModel: Model<VehicleModel>
  ) {}

  async createAccount(
    account: AnyKeys<Account>,
    queryOptions?: SaveOptions
  ): Promise<ResultAccount> {
    return new this.accountModel(account).save(queryOptions);
  }

  async findAccount(
    query: AnyKeys<Account>,
    queryOptions?: QueryOptions
  ): Promise<ResultAccount> {
    return this.accountModel
      .findOne(this.filters.findAccountFilters(query), queryOptions)
      .exec();
  }

  createVehicle(
    vehicle: AnyKeys<Vehicle>,
    queryOptions?: SaveOptions
  ): Promise<ResultVehicle> {
    return new this.vehicleModel(vehicle).save(queryOptions);
  }

  updateAccount(
    filter: AnyKeys<Account>,
    updateQuery: UpdateQuery<Account>
  ): Promise<UpdateWriteOpResult> {
    return this.accountModel
      .updateOne(this.filters.findAccountFilters(filter), updateQuery)
      .exec();
  }

  async findVehicle(
    query: AnyKeys<Vehicle>,
    queryOptions?: QueryOptions
  ): Promise<ResultVehicle> {
    return this.vehicleModel
      .findOne(this.filters.findVehicleFilters(query), {}, queryOptions)
      .exec();
  }

  async findVehicles(
    query: AnyKeys<Vehicle>,
    queryOptions?: QueryOptions
  ): Promise<ResultVehicle[]> {
    return this.vehicleModel
      .find(this.filters.findVehicleFilters(query), {}, queryOptions)
      .exec();
  }

  async countVehicles(query: AnyKeys<Vehicle>): Promise<number> {
    return this.vehicleModel
      .count(this.filters.findVehicleFilters(query))
      .exec();
  }

  async findVehicleBrands(
    query: AnyKeys<VehicleBrand>,
    queryOptions?: QueryOptions
  ): Promise<ResultVehicleBrand[]> {
    return this.vehicleBrandModel
      .find(this.filters.findVehicleBrandFilters(query), {}, queryOptions)
      .exec();
  }

  async findVehicleBrand(
    query: AnyKeys<VehicleBrand>,
    queryOptions?: QueryOptions
  ): Promise<ResultVehicleBrand> {
    return this.vehicleBrandModel
      .findOne(this.filters.findVehicleBrandFilters(query), {}, queryOptions)
      .exec();
  }

  async findVehicleModels(
    query: AnyKeys<VehicleModel>,
    queryOptions?: QueryOptions
  ): Promise<ResultVehicleModel[]> {
    return this.vehicleModelModel
      .find(this.filters.findVehicleModelFilters(query), {}, queryOptions)
      .exec();
  }

  async findVehicleModel(
    query: AnyKeys<VehicleModel>,
    queryOptions?: QueryOptions
  ): Promise<ResultVehicleModel> {
    return this.vehicleModelModel
      .findOne(this.filters.findVehicleModelFilters(query), {}, queryOptions)
      .exec();
  }

  async findProvince(
    query: AnyKeys<Province>,
    queryOptions?: QueryOptions
  ): Promise<ResultProvince> {
    return this.provinceModel
      .findOne(this.filters.findProvinceFilters(query), {}, queryOptions)
      .exec();
  }

  async findProvinces(
    query: AnyKeys<Province>,
    queryOptions?: QueryOptions
  ): Promise<ResultProvince[]> {
    return this.provinceModel
      .find(this.filters.findProvinceFilters(query), {}, queryOptions)
      .exec();
  }
}
