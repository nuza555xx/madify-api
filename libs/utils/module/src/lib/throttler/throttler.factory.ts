import { ConfigKey, IThrottlerConfig } from "@madify-api/utils/config";
import { ConfigService } from "@nestjs/config";
import { ThrottlerModuleOptions } from "@nestjs/throttler";

export const getThrottlerModuleOptions = (
  config: ConfigService
): ThrottlerModuleOptions => config.get<IThrottlerConfig>(ConfigKey.THROTTLER);
