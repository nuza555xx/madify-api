import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Max,
  Min,
} from "class-validator";
import { Types } from "mongoose";

export class GetProfileParams {
  @ApiProperty({
    name: "accountId",
    example: new Types.ObjectId(),
    description: "This is a required property",
    required: true,
  })
  @IsNotEmpty()
  @IsMongoId()
  @IsString()
  accountId: string;
}

class UpdateMobileDto {
  @ApiProperty({
    name: "countryCode",
    example: "+66",
    description: "This is a optional property",
    required: true,
  })
  @IsString()
  @IsOptional()
  countryCode?: string;

  @ApiProperty({
    name: "number",
    example: "999999999",
    description: "This is a optional property",
    required: true,
  })
  @IsString()
  @IsOptional()
  number?: string;
}

export class UpdateProfileDto {
  @ApiProperty({
    name: "email",
    example: "test@example.com",
    description: "This is a optional property",
    required: true,
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({
    name: "displayName",
    example: "test1@example.com",
    description: "This is a optional property",
    required: true,
  })
  @IsOptional()
  @IsString()
  displayName?: string;

  @ApiProperty({
    name: "mobile",
    examples: UpdateMobileDto,
    description: "This is a optional property",
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
    name: "insureId",
    example: new Types.ObjectId(),
    description: "This is a required property",
    required: true,
  })
  @IsNotEmpty()
  @IsMongoId()
  @IsString()
  insureId: string;

  @ApiProperty({
    name: "brand",
    example: "honda",
    description: "This is a required property",
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  brand: string;

  @ApiProperty({
    name: "model",
    example: "civic",
    description: "This is a required property",
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  model: string;

  @ApiProperty({
    name: "vehicleRegistration",
    example: "กข-1111",
    description: "This is a required property",
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  vehicleRegistration: string;

  @ApiProperty({
    name: "registrationProvince",
    example: "chiang_mai",
    description: "This is a required property",
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  registrationProvince: string;

  @ApiProperty({
    name: "registrationCountry",
    example: "thailand",
    description: "This is a required property",
    required: true,
  })
  @IsOptional()
  @IsString()
  registrationCountry?: string;

  @ApiProperty({
    name: "expiredYear",
    example: 2025,
    description: "This is a required property",
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  expiredYear: number;

  @ApiProperty({
    name: "insureRangeAmount",
    example: 2000.69,
    description: "This is a optional property",
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  insureRangeAmount?: number;

  @ApiProperty({
    name: "image",
    example: null,
    description: "This is a optional property",
    required: false,
  })
  @IsOptional()
  @Type(() => String)
  image?: string;
}

export class GetVehicleListQuery {
  @ApiProperty({
    name: "search",
    example: "",
    description: "This is a optional property",
    required: false,
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiProperty({
    name: "skip",
    example: "",
    description: "This is a optional property",
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  skip: number;

  @ApiProperty({
    name: "limit",
    example: 5,
    description: "This is a required property",
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(5)
  @Max(25)
  @Type(() => Number)
  limit: number;
}
