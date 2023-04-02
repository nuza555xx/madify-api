import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { getThrottlerModuleOptions } from './throttler.factory';
import { APP_GUARD } from '@nestjs/core';
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
