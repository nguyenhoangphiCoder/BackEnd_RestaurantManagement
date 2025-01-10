//how to write dto for categories

import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsBoolean,
  IsDate,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsBoolean()
  is_active: boolean;

  @IsDate()
  created_at: Date;
  @IsDate()
  updated_at: Date;
}
export class UpdateCategoryDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsBoolean()
  is_active: boolean;

  @IsDate()
  updated_at: Date;
}
