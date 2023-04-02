import { FilterQuery, Types } from 'mongoose';
import { Account } from '../schema/account.schema';
import { AccountQuery, VehicleQuery } from './repository.interface';
import { Vehicle } from '../schema/vehicle.schema';

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

    if (query?.credentials?.accessToken)
      filters['credentials.platform'] = query?.credentials?.platform;

    if (query?.credentials?.uuid)
      filters['credentials.uuid'] = query?.credentials?.uuid;

    if (query?.visibility) filters.visibility = query.visibility;

    if (query?.devices?.uuid) filters['devices.uuid'] = query.devices.uuid;

    if (query?.devices?.platform)
      filters['devices.platform'] = query.devices.platform;

    return filters;
  }

  findVehicleFilters(query: VehicleQuery): FilterQuery<Vehicle> {
    const filters: FilterQuery<Vehicle> = {};
    if (query?.id) filters._id = new Types.ObjectId(String(query.id));

    if (query?.visibility) filters.visibility = query.visibility;

    if (query?.accountId)
      filters.accountId = new Types.ObjectId(String(query.accountId));

    if (query?.insureId)
      filters.insureId = new Types.ObjectId(String(query.insureId));

    if (query?.brandId)
      filters.brandId = new Types.ObjectId(String(query.brandId));

    if (query?.generationId)
      filters.generationId = new Types.ObjectId(String(query.generationId));

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
}
