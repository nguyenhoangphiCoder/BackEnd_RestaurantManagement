import { IsDecimal, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsDecimal()
  price: number;
  @IsNumber()
  quantity: number;

  @IsNumber()
  quantity_sold: number;
}
export class UpdateProductDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsDecimal()
  price: number;
  @IsNumber()
  quantity: number;

  @IsNumber()
  quantity_sold: number;
}
