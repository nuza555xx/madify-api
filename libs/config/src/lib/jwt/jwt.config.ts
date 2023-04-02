import { registerAs } from '@nestjs/config';
import { ConfigKey } from '../global/config.key';
import { IJwtConfig } from 'libs/interface/src';

export const jwtConfig = registerAs(
  ConfigKey.JWT,
  (): IJwtConfig => ({
    secret: process.env.JWT_SECRET,
    accessTokenExpiresIn: Number(process.env.JWT_ACCESS_EXPIRATION),
    refreshTokenExpiresIn: Number(process.env.JWT_REFRESH_EXPIRATION),
  })
);
