import { MadifyDatabaseModule } from '@madify-api/database';
import { MadifyConfigModule, QueueName } from '@madify-api/utils/config';
import { MadifyUtilsInterceptorModule } from '@madify-api/utils/interceptor';
import {
  MadifyQueueModule,
  MadifyThrottlerModule,
} from '@madify-api/utils/module';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MadifyQueueModule,
    MadifyConfigModule,
    MadifyDatabaseModule,
    MadifyThrottlerModule,
    MadifyUtilsInterceptorModule,
    BullModule.registerQueue({ name: QueueName.NOTIFY }),
  ],
  controllers: [],
  providers: [],
})
export class QueueModule {}
