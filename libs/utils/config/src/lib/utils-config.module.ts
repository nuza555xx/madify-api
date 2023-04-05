import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { jwtConfig } from "./register/jwt.config";
import { mongooseConfig } from "./register/mongoose.config";
import { redisCacheConfig, redisStoreConfig } from "./register/redis.config";
import { storageConfig } from "./register/storage.config";
import { throttlerConfig } from "./register/throttler.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        jwtConfig,
        mongooseConfig,
        redisCacheConfig,
        redisStoreConfig,
        storageConfig,
        throttlerConfig,
      ],
    }),
  ],
  exports: [ConfigModule],
})
export class MadifyConfigModule {}

export {
  jwtConfig,
  mongooseConfig,
  redisCacheConfig,
  redisStoreConfig,
  storageConfig,
  throttlerConfig,
};
