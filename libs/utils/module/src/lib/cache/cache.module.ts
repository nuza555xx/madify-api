import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { getCacheModuleOptions } from "./cache.factory";

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: getCacheModuleOptions,
      inject: [ConfigService],
    }),
  ],
  exports: [CacheModule],
})
export class MadifyCacheModule {}
