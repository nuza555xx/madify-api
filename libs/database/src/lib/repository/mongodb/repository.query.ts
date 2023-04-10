import { FilterQuery, Types } from 'mongoose';
import { Account } from '../../schema/account.schema';
import { Province } from '../../schema/province.model.schema';
import { VehicleBrand } from '../../schema/vehicle.brand.schema';
import { VehicleModel } from '../../schema/vehicle.model.schema';
import { Vehicle } from '../../schema/vehicle.schema';
import {
  AccountQuery,
  ProvinceQuery,
  VehicleBrandQuery,
  VehicleModelQuery,
  VehicleQuery,
} from './repository.interface';

export class PrepareQuery {
  findAccountFilters(query: AccountQuery): FilterQuery<Account> {
    const filters: FilterQuery<Account> = {};
    if (query?.email) filters.email = query.email;

    if (query?.id) filters._id = new Types.ObjectId(String(query.id));

    if (query?.credentials?.accessToken)
      filters['credentials.accessToken'] = query.credentials?.accessToken;

    if (query?.credentials?.accessTokenExpiration)
      filters['credentials.accessTokenExpiration'] =
        query.credentials?.accessTokenExpiration;

    if (query?.credentials?.refreshToken)
      filters['credentials.refreshToken'] = query.credentials?.refreshToken;

    if (query?.credentials?.refreshTokenExpiration)
      filters['credentials.refreshTokenExpiration'] =
        query.credentials?.refreshTokenExpiration;

    if (query?.credentials?.platform)
      filters['credentials.platform'] = query?.credentials?.platform;

    if (query?.credentials?.uuid)
      filters['credentials.uuid'] = query?.credentials?.uuid;

    if (query?.visibility) filters.visibility = query.visibility;

    if (query?.devices?.uuid) filters['devices.uuid'] = query.devices.uuid;

    if (query?.devices?.platform)
      filters['devices.platform'] = query.devices.platform;

    if (query?.authentication?.socialId)
      filters['authentication.socialId'] = query?.authentication?.socialId;

    if (query?.authentication?.provider)
      filters['authentication.provider'] = query?.authentication?.provider;

    return filters;
  }

  findVehicleFilters(query: VehicleQuery): FilterQuery<Vehicle> {
    const filters: FilterQuery<Vehicle> = {};

    if (query?.search) filters.$text = { $search: query.search };

    if (query?.id) filters._id = new Types.ObjectId(String(query.id));

    if (query?.visibility) filters.visibility = query.visibility;

    if (query?.accountId)
      filters.accountId = new Types.ObjectId(String(query.accountId));

    if (query?.insureId)
      filters.insureId = new Types.ObjectId(String(query.insureId));

    if (query?.brand) filters.brand = query.brand;

    if (query?.model) filters.model = query.model;

    if (query?.expiredYear) filters.expiredYear = query.expiredYear;

    if (query?.vehicleRegistration)
      filters.vehicleRegistration = query.vehicleRegistration;

    if (query?.registrationProvince)
      filters.registrationProvince = query.registrationProvince;

    if (query?.registrationCountry)
      filters.registrationCountry = query.registrationCountry;

    if (query?.insureRangeAmount)
      filters.insureRangeAmount = query.insureRangeAmount;

    return filters;
  }

  findVehicleBrandFilters(query: VehicleBrandQuery): FilterQuery<VehicleBrand> {
    const filters: FilterQuery<VehicleBrand> = {};

    if (query?.id) filters._id = new Types.ObjectId(String(query.id));

    if (query?.name?.th) filters['name.th'] = query.name.th;

    if (query?.name?.en) filters['name.en'] = query.name.en;

    if (query?.slug) filters.slug = query.slug;

    return filters;
  }

  findVehicleModelFilters(query: VehicleModelQuery): FilterQuery<VehicleModel> {
    const filters: FilterQuery<VehicleModel> = {};

    if (query?.id) filters._id = new Types.ObjectId(String(query.id));

    if (query?.name?.th) filters['name.th'] = query.name.th;

    if (query?.name?.en) filters['name.en'] = query.name.en;

    if (query?.slug) filters.slug = query.slug;

    if (query?.brand) filters.brand = query.brand;

    return filters;
  }

  findProvinceFilters(query: ProvinceQuery): FilterQuery<Province> {
    const filters: FilterQuery<Province> = {};

    if (query?.id) filters._id = new Types.ObjectId(String(query.id));

    if (query?.name?.th) filters['name.th'] = query.name.th;

    if (query?.name?.en) filters['name.en'] = query.name.en;

    if (query?.slug) filters.slug = query.slug;

    return filters;
  }
}
