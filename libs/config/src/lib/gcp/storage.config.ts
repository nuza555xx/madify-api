import { registerAs } from '@nestjs/config';
import { ConfigKey } from '../global/config.key';
import { IStorageConfig } from 'libs/interface/src';

export const storageConfig = registerAs(
  ConfigKey.STORAGE,
  (): IStorageConfig => ({
    projectId: process.env.PROJECT_ID,
    clientEmail: process.env.CLIENT_EMAIL,
    clientId: process.env.CLIENT_ID,
    privateKey: process.env.PRIVATE_KEY,
    bucketName: process.env.BUCKET_NAME,
    expired: Number(process.env.EXPIRED ?? 1000 * 60),
  })
);
