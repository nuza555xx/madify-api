import { MadifyDatabaseModule } from '@madify-api/database';
import { MadifyConfigModule } from '@madify-api/utils/config';
import { MadifyUtilsInterceptorModule } from '@madify-api/utils/interceptor';
import {
  MadifyCacheModule,
  MadifyElasticsearchModule,
  MadifyJwtConfigModule,
  MadifyThrottlerModule,
} from '@madify-api/utils/module';
import { MadifyUtilsProviderModule } from '@madify-api/utils/provider';
import { Module } from '@nestjs/common';
import { UserService } from './service/user.abstract';
import { UserImpl } from './service/user.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    MadifyConfigModule,
    MadifyDatabaseModule,
    MadifyJwtConfigModule,
    MadifyThrottlerModule,
    MadifyCacheModule,
    MadifyUtilsInterceptorModule,
    MadifyUtilsProviderModule,
    MadifyElasticsearchModule,
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
