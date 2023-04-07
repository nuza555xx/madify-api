import { registerAs } from '@nestjs/config';
import { ConfigKey } from '../config.enum';
import { IStorageConfig } from '../config.interface';

export const storageConfig = registerAs(
  ConfigKey.STORAGE,
  (): IStorageConfig => ({
    projectId: process.env.PROJECT_ID,
    clientEmail: process.env.CLIENT_EMAIL,
    clientId: process.env.CLIENT_ID,
    privateKey: process.env.PRIVATE_KEY,
    bucketName: process.env.BUCKET_NAME,
    expired: Number(process.env.REDIS_CACHED_SHARED_TTL ?? 1000) * 60 * 60,
  })
);
