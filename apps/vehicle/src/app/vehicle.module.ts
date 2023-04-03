import { Module } from '@nestjs/common';
import { MadifyConfigModule } from '@madify-api/config';
import { MadifyDatabaseModule } from '@madify-api/database';
import { MadifyInterceptorsModule } from '@madify-api/interceptor';
import { MadifyJwtModule } from '@madify-api/jwt';
import { MadifyCacheModule } from '@madify-api/module';
import { VehicleService } from './service/vehicle.abstract';
import { VehicleImpl } from './service/vehicle.service';
import { VehicleController } from './vehicle.controller';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { MadifyGCPModule } from '@madify-api/gcp';

@Module({
  imports: [
    MadifyConfigModule,
    MadifyDatabaseModule,
    MadifyJwtModule,
    MadifyCacheModule,
    MadifyInterceptorsModule,
    MadifyGCPModule,
  ],
  controllers: [VehicleController],
  providers: [
    {
      provide: VehicleService,
      useClass: VehicleImpl,
    },
  ],
})
export class VehicleModule {}
