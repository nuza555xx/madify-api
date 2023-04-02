import { Body, Get, Param, Post, Put, Query } from '@nestjs/common';
import {
  GetProfileParams,
  UpdateProfileDto,
  CreateVehicleDto,
  GetVehicleListQuery,
} from './user.dto';
import { IResponseProfile, IResponseVehicle } from '@madify-api/interface';
import {
  Auth,
  Authorizer,
  MadifyAuthorize,
  MadifyAuthorizeAndClearCached,
  MadifyController,
} from '@madify-api/decorator';
import { UserService } from './service/user.abstract';
import { APIPrefix, RedisCacheKey } from '@madify-api/config';

@MadifyController({ path: APIPrefix.USER })
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':accountId')
  @MadifyAuthorize(RedisCacheKey.USER)
  getProfile(
    @Auth() auth: Authorizer,
    @Param() { accountId }: GetProfileParams
  ): Promise<IResponseProfile> {
    auth.requestAccessForAccount(accountId);
    return this.userService.getProfile(accountId);
  }

  @Put(':accountId')
  @MadifyAuthorizeAndClearCached(RedisCacheKey.USER)
  updateProfile(
    @Auth() auth: Authorizer,
    @Param() { accountId }: GetProfileParams,
    @Body() body: UpdateProfileDto
  ): Promise<IResponseProfile> {
    auth.requestAccessForAccount(accountId);
    return this.userService.updateProfile(body, accountId);
  }

  @Post('vehicle')
  @MadifyAuthorizeAndClearCached(RedisCacheKey.VEHICLE)
  createVehicle(
    @Auth() { account }: Authorizer,
    @Body() body: CreateVehicleDto
  ): Promise<IResponseVehicle> {
    return this.userService.createVehicle(body, account.id);
  }

  @Get('vehicle/list')
  @MadifyAuthorize(RedisCacheKey.VEHICLE)
  listVehicle(
    @Auth() { account }: Authorizer,
    @Query() query: GetVehicleListQuery
  ) {
    return this.userService.listVehicle(query, account.id);
  }
}
