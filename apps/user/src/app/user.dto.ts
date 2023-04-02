import { Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsMongoId,
  IsEmail,
  IsOptional,
  IsObject,
  IsNumberString,
  IsNumber,
  Max,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class GetProfileParams {
  @ApiProperty({
    name: 'accountId',
    example: new Types.ObjectId(),
    description: 'This is a required property',
    required: true,
  })
  @IsNotEmpty()
  @IsMongoId()
  @IsString()
  accountId: string;
}

class UpdateMobileDto {
  @ApiProperty({
    name: 'countryCode',
    example: '+66',
    required: true,
  })
  @IsString()
  @IsOptional()
  countryCode?: string;

  @ApiProperty({
    name: 'number',
    example: '999999999',
    required: true,
  })
  @IsString()
  @IsOptional()
  number?: string;
}

export class UpdateProfileDto {
  @ApiProperty({
    name: 'email',
    example: 'test@example.com',
    required: true,
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({
    name: 'displayName',
    example: 'test1@example.com',
    required: true,
  })
  @IsString()
  @IsOptional()
  displayName?: string;

  @ApiProperty({
    name: 'mobile',
    examples: UpdateMobileDto,
    required: true,
    type: UpdateMobileDto,
  })
  @IsOptional()
  @IsObject()
  mobile?: {
    countryCode: string;
    number: string;
  };
}

export class CreateVehicleDto {
  @ApiProperty({
    name: 'insureId',
    example: new Types.ObjectId(),
    description: 'This is a required property',
    required: true,
  })
  @IsNotEmpty()
  @IsMongoId()
  @IsString()
  insureId: string;

  @ApiProperty({
    name: 'brandId',
    example: new Types.ObjectId(),
    description: 'This is a required property',
    required: true,
  })
  @IsNotEmpty()
  @IsMongoId()
  brandId: string;

  @ApiProperty({
    name: 'generationId',
    example: new Types.ObjectId(),
    description: 'This is a required property',
    required: true,
  })
  @IsNotEmpty()
  @IsMongoId()
  generationId: string;

  @ApiProperty({
    name: 'vehicleRegistration',
    example: 'กข-1111',
    description: 'This is a required property',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  vehicleRegistration: string;

  @ApiProperty({
    name: 'registrationProvince',
    example: 'กทม',
    description: 'This is a required property',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  registrationProvince: string;

  @ApiProperty({
    name: 'registrationCountry',
    example: 'ไทย',
    description: 'This is a required property',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  registrationCountry: string;

  @ApiProperty({
    name: 'expiredYear',
    example: '2025',
    description: 'This is a required property',
    required: true,
  })
  @IsNotEmpty()
  @IsNumberString()
  expiredYear: string;

  @ApiProperty({
    name: 'insureRangeAmount',
    example: 2000.69,
    description: 'This is a required property',
    required: false,
  })
  @IsNotEmpty()
  @IsOptional()
  @Type(() => Number)
  insureRangeAmount?: number;
}

export class GetVehicleListQuery {
  @ApiProperty({
    name: 'search',
    example: '',
    description: 'This is a optional property',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Max(255)
  search?: string;

  @ApiProperty({
    name: 'page',
    example: 1,
    description: 'This is a required property',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  page: number;

  @ApiProperty({
    name: 'limit',
    example: 5,
    description: 'This is a required property',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(5)
  @Max(25)
  @Type(() => Number)
  limit: number;
}
