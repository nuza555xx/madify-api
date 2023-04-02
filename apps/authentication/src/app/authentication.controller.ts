import { Body, Delete, Post } from '@nestjs/common';

import {
  Auth,
  Authorizer,
  MadifyBasicAuthorize,
  MadifyController,
  MadifySwaggerHeaderAuth,
  RequestMeta,
  RequestMetadata,
} from '@madify-api/decorator';
import { APIPrefix } from '@madify-api/config';
import {
  LoginWithEmailDto,
  RegisterFirebaseDto,
  RegisterWithEmailDto,
  RequestOTPDto,
} from './authentication.dto';
import { IResponseLogin } from '@madify-api/interface';
import { AuthenticationService } from './service/authentication.abstract';
import { ApiHeaders } from '@nestjs/swagger';
import { AcceptPlatform } from '@madify-api/enum';

@MadifyController({ path: APIPrefix.AUTHENTICATION })
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @MadifySwaggerHeaderAuth()
  @Post('register-with-email')
  registerWithEmail(
    @RequestMeta() { device, ip, platform, uuid }: RequestMetadata,
    @Body() dto: RegisterWithEmailDto
  ): Promise<IResponseLogin> {
    return this.authService.registerWithEmail({
      ...dto,
      device,
      ip,
      platform,
      uuid,
    });
  }

  @MadifySwaggerHeaderAuth()
  @Post('login-with-email')
  loginWithEmail(
    @RequestMeta() { device, ip, platform, uuid }: RequestMetadata,
    @Body() dto: LoginWithEmailDto
  ): Promise<IResponseLogin> {
    return this.authService.loginWithEmail({
      ...dto,
      device,
      ip,
      platform,
      uuid,
    });
  }

  @Post('register-token')
  @MadifyBasicAuthorize()
  async registerToken(
    @Auth() { account }: Authorizer,
    @Body() dto: RegisterFirebaseDto
  ) {
    await this.authService.registerToken(dto, account);
  }

  @Delete('unregister-token')
  @MadifyBasicAuthorize()
  async unregisterToken(
    @Auth() { account }: Authorizer,
    @Body() dto: RegisterFirebaseDto
  ) {
    await this.authService.unregisterToken(dto, account);
  }

  // @Post('forgot-password')
  // forgotPassword(
  //   @RequestMeta() { device, ip, platform }: RequestMetadata,
  //   @Body() dto: ForgotPasswordDto
  // ) {

  // }

  // @Post('request-otp')
  // @MadifyBasicAuthorize()
  // requestOTP(
  //   @RequestMeta() { device, ip, platform }: RequestMetadata,
  //   @Body() dto: RequestOTPDto
  // ) {}

  // @Post('verify-otp')
  // verifyOTP(
  //   @RequestMeta() { device, ip, platform }: RequestMetadata,
  //   @Body() dto: VerifyOTPDto
  // ) {}
}
