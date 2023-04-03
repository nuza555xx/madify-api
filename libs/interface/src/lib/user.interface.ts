import { EntityVisibility } from '@madify-api/enum';

export interface IResponseProfile {
  email: string;
  mobile: {
    countryCode: string;
    number: string;
  };
  displayName: string;
}

export interface IGetProfile {
  accountId: string;
}

export interface IUpdateProfile {
  email?: string;
  mobile?: {
    countryCode: string;
    number: string;
  };
  displayName?: string;
}

export interface ICreateVehicle {
  insureId: string;
  brand: string;
  model: string;
  expiredYear: number;
  vehicleRegistration: string;
  registrationProvince: string;
  registrationCountry?: string;
  insureRangeAmount?: number;
  image?: string;
}

export interface IResponseVehicle {}
