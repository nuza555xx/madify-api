import { registerAs } from '@nestjs/config';
import { QueueOptions } from 'bull';
import { ConfigKey } from '../config.enum';

export const queueConfig = registerAs(
  ConfigKey.QUEUE,
  (): QueueOptions => ({
    redis: {
      host: process.env.REDIS_QUEUE_HOST,
      port: Number(process.env.REDIS_QUEUE_PORT),
      password: process.env.REDIS_QUEUE_PASSWORD,
    },
  })
);
