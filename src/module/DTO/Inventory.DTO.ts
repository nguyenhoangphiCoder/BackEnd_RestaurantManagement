import { IsInt, IsString, IsOptional } from 'class-validator';

export class InventoryDTO {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsInt()
  quantity: number;

  @IsInt()
  threshold: number;

  @IsOptional()
  @IsString()
  created_at?: string;

  @IsOptional()
  @IsString()
  updated_at?: string;
}
