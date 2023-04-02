import { MadifyConfigModule } from '@madify-api/config';
import { MadifyDatabaseModule } from '@madify-api/database';
import { MadifyJwtModule } from '@madify-api/jwt';
import { MadifyCacheModule, MadifyThrottlerModule } from '@madify-api/module';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserImpl } from './service/user.service';
import { UtilsInterceptorsModule } from '@madify-api/interceptor';
import { UserService } from './service/user.abstract';

@Module({
  imports: [
    MadifyConfigModule,
    MadifyDatabaseModule,
    MadifyJwtModule,
    MadifyThrottlerModule,
    MadifyCacheModule,
    UtilsInterceptorsModule,
  ],
  controllers: [UserController],
  providers: [
    {
      provide: UserService,
      useClass: UserImpl,
    },
  ],
})
export class UserModule {}
