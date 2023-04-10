import { ConfigKey } from '@madify-api/utils/config';
import { ConfigService } from '@nestjs/config';
import { ElasticsearchModuleOptions } from '@nestjs/elasticsearch';

export const getElasticModuleOptions = (
  config: ConfigService
): ElasticsearchModuleOptions => config.get(ConfigKey.ELASTICSEARCH);
