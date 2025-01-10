import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import e from 'express';
export class CreateOrderDTO {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsNumber()
  @IsNotEmpty()
  table_id: number;

  @IsNumber()
  @IsNotEmpty()
  total_amount: number;

  @IsEnum(['preparing', 'completed', 'delivered'])
  @IsNotEmpty()
  status: string;

  @IsEnum(['paid', 'unpaid'])
  @IsNotEmpty()
  payment_status: string;

  @IsEnum(['e-wallet', 'bank_card', 'cash'])
  @IsNotEmpty()
  payment_method: string;
}
export class UpdateOrderDTO {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsNumber()
  @IsNotEmpty()
  table_id: number;

  @IsNumber()
  @IsNotEmpty()
  total_amount: number;

  @IsEnum(['preparing', 'completed', 'delivered'])
  @IsNotEmpty()
  status: string;

  @IsEnum(['paid', 'unpaid'])
  @IsNotEmpty()
  payment_status: string;

  @IsEnum(['e-wallet', 'bank_card', 'cash'])
  @IsNotEmpty()
  payment_method: string;
}
