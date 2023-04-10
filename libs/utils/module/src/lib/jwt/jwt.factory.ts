import { ConfigKey, IJwtConfig } from '@madify-api/utils/config';
import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const getJWTModuleOptions = (
  config: ConfigService
): JwtModuleOptions => ({
  secret: config.get<IJwtConfig>(ConfigKey.JWT).secret,
});
