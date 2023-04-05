import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { getMongooseModuleOptions } from "./mongoose.factory";

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
