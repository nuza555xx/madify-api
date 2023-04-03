import { AcceptPlatform, EntityVisibility } from '@madify-api/enum';
import { QuerySelector, RootQuerySelector } from 'mongoose';

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
    refreshToken?: string;
    refreshTokenExpiration?: QuerySelector<Date>;
  };
};

export type VehicleQuery = {
  id?: string;
  accountId?: string;
  insureId?: string;
  brand?: RootQuerySelector<string>;
  model?: RootQuerySelector<string>;
  expiredYear?: number;
  vehicleRegistration?: string;
  registrationProvince?: string;
  registrationCountry?: string;
  insureRangeAmount?: number;
  visibility?: EntityVisibility;
};
