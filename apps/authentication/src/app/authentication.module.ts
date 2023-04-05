import { MadifyDatabaseModule } from "@madify-api/database";
import { MadifyConfigModule } from "@madify-api/utils/config";
import { MadifyUtilsInterceptorModule } from "@madify-api/utils/interceptor";
import {
  MadifyJwtConfigModule,
  MadifyThrottlerModule,
} from "@madify-api/utils/module";
import { Module } from "@nestjs/common";
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationService } from "./service/authentication.abstract";
import { AuthenticationImpl } from "./service/authentication.service";

@Module({
  imports: [
    MadifyConfigModule,
    MadifyDatabaseModule,
    MadifyJwtConfigModule,
    MadifyThrottlerModule,
    MadifyUtilsInterceptorModule,
  ],
  controllers: [AuthenticationController],
  providers: [
    {
      provide: AuthenticationService,
      useClass: AuthenticationImpl,
    },
  ],
})
export class AuthenticationModule {}
