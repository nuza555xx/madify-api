import { ConfigKey, MongooseConfig } from '@madify-api/utils/config';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongooseModuleOptions = (
  config: ConfigService
): MongooseModuleOptions => config.get<MongooseConfig>(ConfigKey.MONGOOSE);
