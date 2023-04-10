import {
  AcceptPlatform,
  Objective,
  SocialProvider,
} from '@madify-api/database';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsJWT,
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
  IsString,
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
    description: 'This is a required property',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    name: 'displayName',
    example: 'test@example.com',
    description: 'This is a required property',

    required: true,
  })
  @IsString()
  @IsNotEmpty()
  displayName: string;
}

export class RegisterWithSocialDto {
  @ApiProperty({
    name: 'email',
    example: 'test@example.com',
    description: 'This is a required property',
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    name: 'displayName',
    example: 'test@example.com',
    description: 'This is a required property',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  displayName: string;

  @ApiProperty({
    name: 'socialId',
    example: '1234567890',
    description: 'This is a required property',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  socialId: string;

  @ApiProperty({
    name: 'authToken',
    example: '',
    description: 'This is a optional property',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  authToken?: string;

  @ApiProperty({
    name: 'provider',
    example: SocialProvider.Google,
    description: 'This is a required property',
    enum: SocialProvider,
    required: true,
  })
  @IsEnum(SocialProvider)
  @Type(() => String)
  @IsNotEmpty()
  provider: SocialProvider;

  @ApiProperty({
    name: 'image',
    example: '',
    description: 'This is a optional property',
    required: false,
  })
  @IsString()
  @IsOptional()
  image?: string;
}

export class LoginWithEmailDto {
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
    description: 'This is a required property',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class LoginWithSocialDto {
  @ApiProperty({
    name: 'email',
    example: 'test@example.com',
    description: 'This is a required property',
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    name: 'displayName',
    example: 'test@example.com',
    description: 'This is a required property',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  displayName: string;

  @ApiProperty({
    name: 'socialId',
    example: '1234567890',
    description: 'This is a required property',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  socialId: string;

  @ApiProperty({
    name: 'authToken',
    example: '',
    description: 'This is a optional property',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  authToken?: string;

  @ApiProperty({
    name: 'provider',
    example: SocialProvider.Google,
    description: 'This is a required property',
    enum: SocialProvider,
    required: true,
  })
  @IsEnum(SocialProvider)
  @Type(() => String)
  @IsNotEmpty()
  provider: SocialProvider;

  @ApiProperty({
    name: 'image',
    example: '',
    description: 'This is a optional property',
    required: false,
  })
  @IsString()
  @IsOptional()
  image?: string;
}

export class RequestOTPDto {
  @ApiProperty({
    name: 'countryCode',
    example: '+66',
    description: 'This is a required property',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  countryCode: string;

  @ApiProperty({
    name: 'tel',
    example: '+66999999999',
    description: 'This is a required property',
    required: true,
  })
  @IsNotEmpty()
  @IsMobilePhone()
  tel: string;

  @ApiProperty({
    name: 'objective',
    example: Objective.Verify,
    description: 'This is a required property',
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
    description: 'This is a required property',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @IsJWT()
  accessToken: string;

  @ApiProperty({
    name: 'refCode',
    example: '1234',
    description: 'This is a required property',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  refCode: string;
}

export class RegisterFirebaseDto {
  @ApiProperty({
    name: 'firebaseToken',
    example: '',
    description: 'This is a required property',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  firebaseToken: string;

  @ApiProperty({
    name: 'uuid',
    example: '',
    description: 'This is a required property',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  uuid: string;

  @ApiProperty({
    name: 'platform',
    example: AcceptPlatform.Web,
    description: 'This is a required property',
    enum: AcceptPlatform,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @IsEnum(AcceptPlatform)
  platform: AcceptPlatform;
}

export class ForgotPasswordDto extends RequestOTPDto {
  @ApiProperty({
    name: 'objective',
    example: Objective.ForgotPassword,
    description: 'This is a required property',
    required: true,
    enum: Objective,
  })
  @IsNotEmpty()
  @IsEnum(Objective)
  objective: Objective;
}
