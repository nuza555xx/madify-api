import { AcceptPlatform, EntityVisibility } from '@madify-api/enum';
import { QuerySelector } from 'mongoose';

export type AccountQuery = {
  id?: string;
  email?: string;
  visibility?: EntityVisibility;
  devices?: {
    uuid?: string;
    platform?: AcceptPlatform;
  };
  credentials?: {
    uuid?: string;
    platform?: AcceptPlatform;
    accessToken?: string;
    accessTokenExpiration?: QuerySelector<Date>;
  };
};

export type VehicleQuery = {
  id?: string;
  accountId?: string;
  insureId?: string;
  brandId?: string;
  generationId?: string;
  expiredYear?: string;
  vehicleRegistration?: string;
  registrationProvince?: string;
  registrationCountry?: string;
  insureRangeAmount?: number;
  visibility?: EntityVisibility;
};
