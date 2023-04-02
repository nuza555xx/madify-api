import { Module } from '@nestjs/common';
import { jwtConfig } from './jwt/jwt.config';
import { redisStoreConfig, redisCacheConfig } from './redis/redis.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { mongooseConfig } from './mongoose/mongoose.config';
import { throttlerConfig } from './throttler/throttler.config';

export const CONFIG_PROVIDE = 'config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        jwtConfig,
        redisStoreConfig,
        redisCacheConfig,
        mongooseConfig,
        throttlerConfig,
      ],
    }),
  ],
  providers: [
    {
      provide: CONFIG_PROVIDE,
      useClass: ConfigService,
    },
  ],
  exports: [ConfigModule, CONFIG_PROVIDE],
})
export class MadifyConfigModule {}
