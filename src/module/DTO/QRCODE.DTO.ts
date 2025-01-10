import { IsInt, IsString, IsOptional } from 'class-validator';

export class QrCodesDTO {
  @IsInt()
  id: number;

  @IsInt()
  table_id: number;

  @IsString()
  qr_code_data: string;

  @IsOptional()
  @IsString()
  created_at?: string;

  @IsOptional()
  @IsString()
  updated_at?: string;
}
