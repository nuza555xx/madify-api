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

export interface IImage {
  name: string;
  imageKey: string;
}
export interface ICreateVehicle {
  insureId: string;
  brandId: string;
  generationId: string;
  expiredYear: string;
  vehicleRegistration: string;
  registrationProvince: string;
  registrationCountry: string;
  insureRangeAmount?: number;
}

export interface IResponseVehicle {}
