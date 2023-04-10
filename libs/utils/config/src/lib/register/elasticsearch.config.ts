import { ClientOptions } from '@elastic/elasticsearch';
import { registerAs } from '@nestjs/config';
import { ConfigKey } from '../config.enum';

export const elasticsearchConfig = registerAs(
  ConfigKey.ELASTICSEARCH,
  (): ClientOptions => ({
    node: process.env.ELASTICSEARCH_NODE,
    auth: {
      username: process.env.ELASTICSEARCH_USERNAME || 'elastic',
      password: process.env.ELASTICSEARCH_PASSWORD || '123456',
    },
  })
);
