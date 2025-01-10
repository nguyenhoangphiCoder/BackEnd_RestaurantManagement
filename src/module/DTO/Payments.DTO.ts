import {
  IsDecimal,
  isDecimal,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class createPayments {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  order_id: number;

  @IsEnum(['e-wallet', 'bank_card', 'cash'])
  @IsNotEmpty()
  payment_method: string;

  @IsDecimal()
  @IsNotEmpty()
  amount: number;

  @IsNumber()
  transactions_id: number;
}
export class updatePayments {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  order_id: number;

  @IsEnum(['e-wallet', 'bank_card', 'cash'])
  @IsNotEmpty()
  payment_method: string;

  @IsDecimal()
  @IsNotEmpty()
  amount: number;

  @IsNumber()
  transactions_id: number;
}
