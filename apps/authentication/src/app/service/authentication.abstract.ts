import { Account } from '@madify-api/database';
import {
  IRegisterWithEmail,
  IResponseLogin,
  ILoginWithEmail,
  IRegisterFirebase,
  IRefreshToken,
} from '@madify-api/interface';

export abstract class AuthenticationService {
  abstract registerWithEmail(dto: IRegisterWithEmail): Promise<IResponseLogin>;

  abstract loginWithEmail(dto: ILoginWithEmail): Promise<IResponseLogin>;

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
