import { ConfigKey } from '@madify-api/utils/config';
import { BullModuleOptions } from '@nestjs/bull';
import { ConfigService } from '@nestjs/config';

export const getBullModuleOptions = (
  config: ConfigService
): BullModuleOptions => config.get(ConfigKey.QUEUE);
