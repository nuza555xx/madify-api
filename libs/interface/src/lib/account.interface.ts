import { Account } from '@madify-api/database';
import { RequestMetadata } from '@madify-api/decorator';
import { AcceptPlatform } from '@madify-api/enum';

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
