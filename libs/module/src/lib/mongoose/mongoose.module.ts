import { ConfigService } from '@nestjs/config';
import { MadifyConfigModule } from '@madify-api/config';
import { getMongooseModuleOptions } from './mongoose.factory';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: getMongooseModuleOptions,
      inject: [ConfigService],
    }),
  ],
  exports: [MongooseModule],
})
export class MadifyMongooseModule {}
