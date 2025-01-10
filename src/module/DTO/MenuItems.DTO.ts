import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsNull } from 'typeorm';
export class CreateMenuItemDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  category_id: number;

  @IsBoolean()
  is_active: boolean;
}
export class UpdateMenuItemDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsNumber()
  category_id: number;

  @IsBoolean()
  is_active: boolean;
}
