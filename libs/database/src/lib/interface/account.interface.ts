import { AcceptPlatform } from '../enum/user.enum';
import { RequestMetadata } from './global.interface';

export interface IRegisterWithEmail extends RequestMetadata {
  email: string;
  password: string;
  displayName: string;
}

export interface ILoginWithEmail extends RequestMetadata {
  email: string;
  password: string;
}

export interface IResponseLogin {
  accessToken: string;
  refreshToken: string;
}

export interface IGenerateToken {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiration: Date;
  refreshTokenExpiration: Date;
}

export class IRegisterFirebase {
  firebaseToken: string;
  uuid: string;
  platform: AcceptPlatform;
}

export interface IRefreshToken extends RequestMetadata {
  refreshToken: string;
}

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

export interface IResponseVehicle {
  brand: string;
  model: string;
  vehicleRegistration: string;
  registrationProvince: string;
}
