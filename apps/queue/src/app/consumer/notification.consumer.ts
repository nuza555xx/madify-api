import { inspect } from 'util';
import { MadifyLogger } from '@madify-api/utils/common';
import { QueueName } from '@madify-api/utils/config';
import { Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job } from 'bull';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';

@Injectable()
@Processor(QueueName.NOTIFY)
export class NotificationConsumer {
  private logger = new MadifyLogger(NotificationConsumer.name);

  constructor(@InjectFirebaseAdmin() private firebase: FirebaseAdmin) {}

  @Process()
  async readOperationJob(job: Job<any>) {
    this.logger.log(`readOperationJob :: ${inspect(job)}`);

    try {
      // await this.firebase.messaging.sendMulticast();
    } catch (error) {
      this.logger.error(error);
    }
  }
}
