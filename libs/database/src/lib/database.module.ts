import {
  MadifyElasticsearchModule,
  MadifyMongooseModule,
} from '@madify-api/utils/module';
import { Module } from '@nestjs/common';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { RepositoryElasticImpl } from './repository/elasticsearch/repository.service';
import { RepositoryMongoImpl } from './repository/mongodb/repository.service';
import { Account, AccountSchema } from './schema/account.schema';
import { Otp, OtpSchema } from './schema/otp.schema';
import { Province, ProvinceSchema } from './schema/province.model.schema';
import {
  VehicleBrand,
  VehicleBrandSchema,
} from './schema/vehicle.brand.schema';
import {
  VehicleModel,
  VehicleModelSchema,
} from './schema/vehicle.model.schema';
import { Vehicle, VehicleSchema } from './schema/vehicle.schema';

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
    name: VehicleBrand.name,
    schema: VehicleBrandSchema,
  },
  {
    name: VehicleModel.name,
    schema: VehicleModelSchema,
  },
  {
    name: Otp.name,
    schema: OtpSchema,
  },
  {
    name: Province.name,
    schema: ProvinceSchema,
  },
];

export const REPOSITORY_MONGO_PROVIDE = 'repository-mongo';
export const REPOSITORY_ELS_PROVIDE = 'repository-elasticsearch';

@Module({
  imports: [
    MadifyMongooseModule,
    MadifyElasticsearchModule,
    MongooseModule.forFeature(modelDefinitions),
  ],
  providers: [
    {
      provide: REPOSITORY_MONGO_PROVIDE,
      useClass: RepositoryMongoImpl,
    },
    {
      provide: REPOSITORY_ELS_PROVIDE,
      useClass: RepositoryElasticImpl,
    },
  ],
  exports: [REPOSITORY_MONGO_PROVIDE, REPOSITORY_ELS_PROVIDE],
})
export class MadifyDatabaseModule {}
