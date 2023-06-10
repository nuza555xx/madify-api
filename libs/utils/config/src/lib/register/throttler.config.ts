import { registerAs } from '@nestjs/config';
import { ConfigKey } from '../config.enum';
import { ThrottlerConfig } from '../config.interface';

export const throttlerConfig = registerAs(
  ConfigKey.THROTTLER,
  (): ThrottlerConfig => ({
    limit: Number(process.env.RATE_LIMIT_LIMIT) || 5,
    ttl: Number(process.env.RATE_LIMIT_TTL) || 1000,
  })
);
