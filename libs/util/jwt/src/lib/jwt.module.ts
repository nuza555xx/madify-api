import { MadifyJwtConfigModule } from '@madify-api/module';
import { Module } from '@nestjs/common';
import { TokenService } from './jwt.service';

export const JWT_PROVIDE = 'jwt-token';
@Module({
  imports: [MadifyJwtConfigModule],
  providers: [
    {
      provide: JWT_PROVIDE,
      useClass: TokenService,
    },
  ],
  exports: [JWT_PROVIDE],
})
export class MadifyJwtModule {}
