import { EntityVisibility } from '../../enum/base.enum';

export type VehicleQuery = {
  id?: string;
  accountId?: string;
  insureId?: string;
  brand?: string;
  model?: string;
  expiredYear?: number;
  vehicleRegistration?: string;
  registrationProvince?: string;
  registrationCountry?: string;
  insureRangeAmount?: number;
  visibility?: EntityVisibility;
  search?: string;
};
