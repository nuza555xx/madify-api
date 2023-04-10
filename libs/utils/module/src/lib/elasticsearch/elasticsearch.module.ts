import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { getElasticModuleOptions } from './elasticsearch.factory';

@Module({
  imports: [
    ElasticsearchModule.registerAsync({
      useFactory: getElasticModuleOptions,
      inject: [ConfigService],
    }),
  ],
  exports: [ElasticsearchModule],
})
export class MadifyElasticsearchModule {}
