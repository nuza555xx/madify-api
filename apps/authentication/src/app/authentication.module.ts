import { AuthenticationController } from './authentication.controller';
import { AuthenticationImpl } from './service/authentication.service';
import { AuthenticationService } from './service/authentication.abstract';
import { MadifyConfigModule } from '@madify-api/config';
import { MadifyDatabaseModule } from '@madify-api/database';
import { MadifyJwtModule } from '@madify-api/jwt';
import { MadifyThrottlerModule } from '@madify-api/module';
import { Module } from '@nestjs/common';
import { UtilsInterceptorsModule } from '@madify-api/interceptor';

@Module({
  imports: [
    MadifyConfigModule,
    MadifyDatabaseModule,
    MadifyJwtModule,
    MadifyThrottlerModule,
    UtilsInterceptorsModule,
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
