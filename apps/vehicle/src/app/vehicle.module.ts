import { MadifyDatabaseModule } from "@madify-api/database";
import { MadifyConfigModule } from "@madify-api/utils/config";
import { MadifyUtilsInterceptorModule } from "@madify-api/utils/interceptor";
import {
  MadifyCacheModule,
  MadifyJwtConfigModule,
  MadifyThrottlerModule,
} from "@madify-api/utils/module";
import { MadifyUtilsProviderModule } from "@madify-api/utils/provider";
import { Module } from "@nestjs/common";
import { VehicleService } from "./service/vehicle.abstract";
import { VehicleImpl } from "./service/vehicle.service";
import { VehicleController } from "./vehicle.controller";

@Module({
  imports: [
    MadifyConfigModule,
    MadifyDatabaseModule,
    MadifyJwtConfigModule,
    MadifyThrottlerModule,
    MadifyCacheModule,
    MadifyUtilsInterceptorModule,
    MadifyUtilsProviderModule,
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
