import { UserModule } from './../../../user/src/app/user.module';
import { Module } from '@nestjs/common';
import { MadifyConfigModule } from '@madify-api/config';
import { MadifyDatabaseModule } from '@madify-api/database';
import { UtilsInterceptorsModule } from '@madify-api/interceptor';
import { MadifyJwtModule } from '@madify-api/jwt';
import { MadifyCacheModule } from '@madify-api/module';
import { VehicleService } from './service/vehicle.abstract';
import { VehicleImpl } from './service/vehicle.service';
import { VehicleController } from './vehicle.controller';

@Module({
  imports: [
    MadifyConfigModule,
    MadifyDatabaseModule,
    MadifyJwtModule,
    MadifyCacheModule,
    UtilsInterceptorsModule,
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
