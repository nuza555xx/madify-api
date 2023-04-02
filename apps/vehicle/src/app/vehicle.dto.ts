import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  Max,
  Min,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Sorting } from '@madify-api/enum';

export class GetSearchVehicleQuery {
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

  @ApiProperty({
    name: 'sorting',
    example: Sorting.ASC,
    description: 'This is a required property',
    required: false,
    enum: Sorting,
  })
  @IsOptional()
  @IsEnum(Sorting)
  sorting: Sorting;
}
