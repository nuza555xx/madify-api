import {
  Account,
  LoginWithEmail,
  LoginWithSocial,
  RefreshToken,
  RegisterFirebase,
  RegisterWithEmail,
  RegisterWithSocial,
  ResponseLogin,
} from '@madify-api/database';

export abstract class AuthenticationService {
  abstract registerWithEmail(dto: RegisterWithEmail): Promise<ResponseLogin>;

  abstract registerWithSocial(dto: RegisterWithSocial): Promise<ResponseLogin>;

  abstract loginWithEmail(dto: LoginWithEmail): Promise<ResponseLogin>;

  abstract loginWithSocial(dto: LoginWithSocial): Promise<ResponseLogin>;

  abstract registerToken(
    dto: RegisterFirebase,
    account: Account
  ): Promise<void>;

  abstract unregisterToken(
    dto: RegisterFirebase,
    account: Account
  ): Promise<void>;

  abstract refreshToken(dto: RefreshToken): Promise<ResponseLogin>;
}
