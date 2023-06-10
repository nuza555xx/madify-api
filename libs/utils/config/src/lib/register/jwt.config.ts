import { registerAs } from '@nestjs/config';
import { ConfigKey } from '../config.enum';
import { JwtConfig } from '../config.interface';

export const jwtConfig = registerAs(
  ConfigKey.JWT,
  (): JwtConfig => ({
    secret: process.env.JWT_SECRET,
    accessTokenExpiresIn: Number(process.env.JWT_ACCESS_EXPIRATION),
    refreshTokenExpiresIn: Number(process.env.JWT_REFRESH_EXPIRATION),
  })
);
