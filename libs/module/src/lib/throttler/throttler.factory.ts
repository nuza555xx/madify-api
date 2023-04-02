import { ConfigKey } from '@madify-api/config';
import { IThrottlerConfig } from 'libs/interface/src';
import { ConfigService } from '@nestjs/config';
import { ThrottlerModuleOptions } from '@nestjs/throttler';

export const getThrottlerModuleOptions = (
  config: ConfigService
): ThrottlerModuleOptions => config.get<IThrottlerConfig>(ConfigKey.THROTTLER);
