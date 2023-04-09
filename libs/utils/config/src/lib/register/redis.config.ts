import { registerAs } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigKey } from '../config.enum';
import { IRedisConfig } from '../config.interface';

export const redisStoreConfig = registerAs(
  ConfigKey.STORE,
  (): IRedisConfig => ({
    store: redisStore,
    host: process.env.REDIS_STORE_HOST,
    password: process.env.REDIS_STORE_PASSWORD,
    port: Number(process.env.REDIS_STORE_PORT),
    db: process.env.REDIS_STORE_DB || '0',
    ttl: Number(process.env.REDIS_STORE_TTL) || 1000,
  })
);

export const redisCacheConfig = registerAs(
  ConfigKey.CACHE,
  (): IRedisConfig => ({
    store: redisStore,
    host: process.env.REDIS_CACHE_HOST,
    port: Number(process.env.REDIS_CACHE_PORT),
    password: process.env.REDIS_CACHE_PASSWORD,
    db: process.env.REDIS_STORE_DB || '0',
    ttl: Number(process.env.REDIS_CACHE_TTL) || 1000,
  })
);
