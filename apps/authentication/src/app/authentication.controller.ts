import { IResponseLogin, RequestMetadata } from "@madify-api/database";
import { APIPrefix } from "@madify-api/utils/config";
import {
  Auth,
  Authorizer,
  BearerToken,
  MadifyBasicAuthorize,
  MadifyController,
  MadifySwaggerHeaderAuth,
  RequestMeta,
} from "@madify-api/utils/decorator";
import { Body, Delete, Post } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import {
  LoginWithEmailDto,
  RegisterFirebaseDto,
  RegisterWithEmailDto,
} from "./dto/authentication.dto";
import { AuthenticationService } from "./service/authentication.abstract";

@MadifyController({ path: APIPrefix.AUTHENTICATION })
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @MadifySwaggerHeaderAuth()
  @Post("register-with-email")
  registerWithEmail(
    @RequestMeta() { ip, platform, uuid }: RequestMetadata,
    @Body() dto: RegisterWithEmailDto
  ): Promise<IResponseLogin> {
    return this.authService.registerWithEmail({
      ...dto,
      ip,
      platform,
      uuid,
    });
  }

  @MadifySwaggerHeaderAuth()
  @Post("login-with-email")
  loginWithEmail(
    @RequestMeta() { ip, platform, uuid }: RequestMetadata,
    @Body() dto: LoginWithEmailDto
  ): Promise<IResponseLogin> {
    return this.authService.loginWithEmail({
      ...dto,
      ip,
      platform,
      uuid,
    });
  }

  @Post("register-token")
  @MadifyBasicAuthorize()
  async registerToken(
    @Auth() { account }: Authorizer,
    @Body() dto: RegisterFirebaseDto
  ) {
    await this.authService.registerToken(dto, account);
  }

  @Delete("unregister-token")
  @MadifyBasicAuthorize()
  async unregisterToken(
    @Auth() { account }: Authorizer,
    @Body() dto: RegisterFirebaseDto
  ) {
    await this.authService.unregisterToken(dto, account);
  }

  @Post("refresh-token")
  @ApiBearerAuth("JSON Web Token Authorization")
  @MadifySwaggerHeaderAuth()
  async refreshToken(
    @RequestMeta() { platform, uuid }: RequestMetadata,
    @BearerToken() refreshToken: string
  ) {
    return this.authService.refreshToken({ refreshToken, platform, uuid });
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
