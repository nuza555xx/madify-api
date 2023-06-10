import { AcceptPlatform, SocialProvider } from '../enum/user.enum';
import { RequestMetadata } from './global.interface';

export interface RegisterWithEmail extends RequestMetadata {
  email: string;
  password: string;
  displayName: string;
}

export interface RegisterWithSocial extends RequestMetadata {
  email: string;
  displayName: string;
  socialId: string;
  provider: SocialProvider;
  authToken?: string;
  image?: string;
}
export interface LoginWithEmail extends RequestMetadata {
  email: string;
  password: string;
}

export interface LoginWithSocial extends RequestMetadata {
  email: string;
  displayName: string;
  socialId: string;
  provider: SocialProvider;
  authToken?: string;
  image?: string;
}

export interface ResponseLogin {
  accessToken: string;
  refreshToken: string;
  profile: IResponseProfile;
}

export interface GenerateToken {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiration: Date;
  refreshTokenExpiration: Date;
}

export class RegisterFirebase {
  firebaseToken: string;
  uuid: string;
  platform: AcceptPlatform;
}

export interface RefreshToken extends RequestMetadata {
  refreshToken: string;
}

export interface ResponseProfile {
  id: string;
  email: string;
  mobile: {
    countryCode: string;
    number: string;
  };
  displayName: string;
}

export interface GetProfile {
  accountId: string;
}

export interface UpdateProfile {
  email?: string;
  mobile?: {
    countryCode: string;
    number: string;
  };
  displayName?: string;
}

export interface CreateVehicle {
  insureId: string;
  brand: string;
  model: string;
  expiredYear: number;
  vehicleRegistration: string;
  registrationProvince: string;
  registrationCountry?: string;
  insureRangeAmount?: number;
  image: string;
}
