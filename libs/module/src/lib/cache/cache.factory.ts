import { ConfigKey } from '@madify-api/config';
import { CacheModuleOptions } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const getCacheModuleOptions = (
  config: ConfigService
): CacheModuleOptions => config.get(ConfigKey.CACHE);
