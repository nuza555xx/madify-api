import { ConfigKey } from '@madify-api/utils/config';
import { CacheModuleOptions } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const getCacheModuleOptions = (
  config: ConfigService
): CacheModuleOptions => config.get(ConfigKey.CACHE);
