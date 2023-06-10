import { ConfigKey, JwtConfig } from '@madify-api/utils/config';
import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const getJWTModuleOptions = (
  config: ConfigService
): JwtModuleOptions => ({
  secret: config.get<JwtConfig>(ConfigKey.JWT).secret,
});
