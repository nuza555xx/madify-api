import { registerAs } from '@nestjs/config';
import { ConfigKey } from '../global/config.key';
import { IThrottlerConfig } from 'libs/interface/src';

export const throttlerConfig = registerAs(
  ConfigKey.THROTTLER,
  (): IThrottlerConfig => ({
    limit: Number(process.env.RATE_LIMIT_LIMIT) || 5,
    ttl: Number(process.env.RATE_LIMIT_TTL) || 1000,
  })
);
