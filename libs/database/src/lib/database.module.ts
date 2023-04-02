import { Module } from '@nestjs/common';
import { MadifyMongooseModule } from '@madify-api/module';
import { RepositoryImpl } from './repository/repository.service';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './schema/account.schema';
import { Vehicle, VehicleSchema } from './schema/vehicle.schema';
import { Otp, OtpSchema } from './schema/otp.schema';
import {
  VehicleBrand,
  VehicleBrandSchema,
} from './schema/vehicle.brand.schema';

const modelDefinitions: ModelDefinition[] = [
  {
    name: Account.name,
    schema: AccountSchema,
  },
  {
    name: Vehicle.name,
    schema: VehicleSchema,
  },
  {
    name: Otp.name,
    schema: OtpSchema,
  },
  {
    name: VehicleBrand.name,
    schema: VehicleBrandSchema,
  },
];

export const REPOSITORY_PROVIDE = 'repository';

@Module({
  imports: [MadifyMongooseModule, MongooseModule.forFeature(modelDefinitions)],
  providers: [
    {
      provide: REPOSITORY_PROVIDE,
      useClass: RepositoryImpl,
    },
  ],
  exports: [REPOSITORY_PROVIDE],
})
export class MadifyDatabaseModule {}
