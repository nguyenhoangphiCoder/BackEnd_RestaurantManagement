import { IsInt, IsString, IsEnum, IsOptional } from 'class-validator';

export class TransactionsDTO {
  @IsInt()
  id: number;

  @IsInt()
  order_id: number;

  @IsEnum(['success', 'failed'])
  status: 'success' | 'failed';

  @IsEnum(['e-wallet', 'bank_card', 'cash'])
  payment_method: 'e-wallet' | 'bank_card' | 'cash';

  @IsOptional()
  @IsString()
  transaction_details?: string;

  @IsOptional()
  @IsString()
  created_at?: string;
}
