import { MadifyConfigModule } from '@madify-api/config';
import { MadifyDatabaseModule } from '@madify-api/database';
import { MadifyJwtModule } from '@madify-api/jwt';
import { MadifyCacheModule, MadifyThrottlerModule } from '@madify-api/module';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserImpl } from './service/user.service';
import { MadifyInterceptorsModule } from '@madify-api/interceptor';
import { UserService } from './service/user.abstract';
import { MadifyGCPModule } from '@madify-api/gcp';

@Module({
  imports: [
    MadifyConfigModule,
    MadifyDatabaseModule,
    MadifyJwtModule,
    MadifyThrottlerModule,
    MadifyCacheModule,
    MadifyInterceptorsModule,
    MadifyGCPModule,
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
