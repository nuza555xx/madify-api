import { registerAs } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigKey } from '../config.enum';
import { IRedisConfig } from '../config.interface';

export const redisStoreConfig = registerAs(
  ConfigKey.STORE,
  (): IRedisConfig => ({
    store: redisStore,
    host: process.env.REDIS_STORE_HOST,
    port: Number(process.env.REDIS_STORE_PORT),
    db: Number(process.env.REDIS_STORE_DB) || 1,
    ttl: Number(process.env.REDIS_STORE_TTL) || 1000,
  })
);

export const redisCacheConfig = registerAs(
  ConfigKey.CACHE,
  (): IRedisConfig => ({
    store: redisStore,
    host: process.env.REDIS_CACHE_HOST,
    port: Number(process.env.REDIS_CACHE_PORT),
    db: Number(process.env.REDIS_CACHE_DB) || 1,
    ttl: Number(process.env.REDIS_CACHE_TTL) || 1000,
  })
);
