import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { getJWTModuleOptions } from "./jwt.factory";

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: getJWTModuleOptions,
      inject: [ConfigService],
    }),
  ],
  exports: [JwtModule],
})
export class MadifyJwtConfigModule {}
