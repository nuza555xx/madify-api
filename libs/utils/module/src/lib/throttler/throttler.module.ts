import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { getThrottlerModuleOptions } from './throttler.factory';
import { MadifyThrottlerGuard } from './throttler.guard';

@Module({
  imports: [
    ThrottlerModule.forRootAsync({
      useFactory: getThrottlerModuleOptions,
      inject: [ConfigService],
    }),
  ],
  providers: [{ provide: APP_GUARD, useClass: MadifyThrottlerGuard }],
})
export class MadifyThrottlerModule {}
