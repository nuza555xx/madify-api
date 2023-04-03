import { MadifyCacheModule } from '@madify-api/module';
import { MadifyDatabaseModule } from '@madify-api/database';
import { MadifyJwtModule } from '@madify-api/jwt';
import { Module } from '@nestjs/common';

@Module({
  imports: [MadifyDatabaseModule, MadifyJwtModule, MadifyCacheModule],
})
export class MadifyInterceptorsModule {}
