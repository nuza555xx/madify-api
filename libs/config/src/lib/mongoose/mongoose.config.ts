import { registerAs } from '@nestjs/config';
import { ConfigKey } from '../global/config.key';
import { IMongooseConfig } from 'libs/interface/src';

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_AUTHENTICATION =
  DB_USERNAME && DB_PASSWORD ? `${DB_USERNAME}:${DB_PASSWORD}@` : '';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USE_LOCAL = DB_HOST === 'localhost';
const DB_FORMAT = `mongodb${DB_USE_LOCAL ? '' : '+srv'}`;
const DB_DATABASE_NAME = process.env.DB_DATABASE_NAME || '';

export const mongooseConfig = registerAs(
  ConfigKey.MONGOOSE,
  (): IMongooseConfig => ({
    uri: `${DB_FORMAT}://${DB_AUTHENTICATION}${DB_HOST}/${DB_DATABASE_NAME}?retryWrites=true&w=majority`,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
);
