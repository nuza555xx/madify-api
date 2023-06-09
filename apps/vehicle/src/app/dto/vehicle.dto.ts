import { Sorting } from '@madify-api/database';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class GetSearchVehicleQuery {
  @ApiProperty({
    name: 'search',
    example: '',
    description: 'This is a optional property',
    required: false,
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiProperty({
    name: 'skip',
    example: '',
    description: 'This is a optional property',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  skip: number;

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

  @ApiProperty({
    name: 'sorting',
    example: Sorting.ASC,
    description: 'This is a required property',
    required: false,
    enum: Sorting,
  })
  @IsOptional()
  @IsEnum(Sorting)
  sorting?: Sorting;
}
