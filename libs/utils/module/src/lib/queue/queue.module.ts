import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getBullModuleOptions } from './queue.factory';

@Module({
  imports: [
    BullModule.forRootAsync({
      useFactory: getBullModuleOptions,
      inject: [ConfigService],
    }),
  ],
  exports: [BullModule],
})
export class MadifyQueueModule {}
