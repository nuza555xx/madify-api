import {
  Account,
  ILoginWithEmail,
  ILoginWithSocial,
  IRefreshToken,
  IRegisterFirebase,
  IRegisterWithEmail,
  IRegisterWithSocial,
  IResponseLogin,
} from '@madify-api/database';

export abstract class AuthenticationService {
  abstract registerWithEmail(dto: IRegisterWithEmail): Promise<IResponseLogin>;

  abstract registerWithSocial(
    dto: IRegisterWithSocial
  ): Promise<IResponseLogin>;

  abstract loginWithEmail(dto: ILoginWithEmail): Promise<IResponseLogin>;

  abstract loginWithSocial(dto: ILoginWithSocial): Promise<IResponseLogin>;

  abstract registerToken(
    dto: IRegisterFirebase,
    account: Account
  ): Promise<void>;

  abstract unregisterToken(
    dto: IRegisterFirebase,
    account: Account
  ): Promise<void>;

  abstract refreshToken(dto: IRefreshToken): Promise<IResponseLogin>;
}
