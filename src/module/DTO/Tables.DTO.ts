import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsBoolean,
  IsDate,
  IsEnum,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
export class CreateTablesDTO {
  @ApiProperty()
  @IsEnum(['available', 'reserved', 'occupied'])
  @IsNotEmpty()
  status: string;

  @IsString()
  qr_code: string;
}
export class UpdateTablesDTO {
  @ApiProperty()
  @IsEnum(['available', 'reserved', 'occupied'])
  status: string;

  @IsString()
  qr_code: string;
}
