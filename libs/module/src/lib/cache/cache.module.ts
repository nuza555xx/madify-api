import { CacheModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getCacheModuleOptions } from './cache.factory';

@Module({
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: getCacheModuleOptions,
      inject: [ConfigService],
    }),
  ],
  exports: [CacheModule],
})
export class MadifyCacheModule {}
