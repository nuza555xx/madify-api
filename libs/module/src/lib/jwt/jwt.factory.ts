import { ConfigKey } from '@madify-api/config';
import { IJwtConfig } from 'libs/interface/src';
import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const getJWTModuleOptions = (
  config: ConfigService
): JwtModuleOptions => ({
  secret: config.get<IJwtConfig>(ConfigKey.JWT).secret,
});
