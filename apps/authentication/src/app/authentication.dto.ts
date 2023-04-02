import { AcceptPlatform, Objective } from '@madify-api/enum';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsMobilePhone,
  IsEnum,
  IsJWT,
} from 'class-validator';

export class RegisterWithEmailDto {
  @ApiProperty({
    name: 'email',
    example: 'test@example.com',
    description: 'This is a required property',
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    name: 'password',
    example: '12345678',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    name: 'displayName',
    example: 'test@example.com',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  displayName: string;
}

export class LoginWithEmailDto {
  @ApiProperty({
    name: 'email',
    example: 'test@example.com',
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    name: 'password',
    example: '12345678',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class RequestOTPDto {
  @ApiProperty({
    name: 'countryCode',
    example: '+66',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  countryCode: string;

  @ApiProperty({
    name: 'tel',
    example: '+66999999999',
    required: true,
  })
  @IsNotEmpty()
  @IsMobilePhone()
  tel: string;

  @ApiProperty({
    name: 'objective',
    example: Objective.Verify,
    required: true,
    enum: Objective,
  })
  @IsNotEmpty()
  @IsEnum(Objective)
  objective: Objective;
}

export class VerifyOTPDto {
  @ApiProperty({
    name: 'accessToken',
    example: 'ACCESS_TOKEN',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @IsJWT()
  accessToken: string;

  @ApiProperty({
    name: 'refCode',
    example: '1234',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  refCode: string;
}

export class RegisterFirebaseDto {
  @IsString()
  @IsNotEmpty()
  firebaseToken: string;

  @IsString()
  @IsNotEmpty()
  uuid: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(AcceptPlatform)
  platform: AcceptPlatform;
}

export class ForgotPasswordDto extends RequestOTPDto {
  @ApiProperty({
    name: 'objective',
    example: Objective.ForgotPassword,
    required: true,
    enum: Objective,
  })
  @IsNotEmpty()
  @IsEnum(Objective)
  objective: Objective;
}
