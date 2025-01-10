import { IsDecimal, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
export class createOrderItems {
  @IsNumber()
  @ApiProperty()
  @IsNotEmpty()
  order_id: number;

  @IsNumber()
  @IsNotEmpty()
  menu_item_id: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsString()
  notes: string;

  @IsDecimal()
  price: number;
}
export class updateOrderItems {
  @IsNumber()
  @ApiProperty()
  @IsNotEmpty()
  order_id: number;

  @IsNumber()
  @IsNotEmpty()
  menu_item_id: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsString()
  notes: string;

  @IsDecimal()
  price: number;
}
