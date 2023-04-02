import { ConfigKey } from '@madify-api/config';
import { IMongooseConfig } from 'libs/interface/src';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongooseModuleOptions = (
  config: ConfigService
): MongooseModuleOptions => config.get<IMongooseConfig>(ConfigKey.MONGOOSE);
