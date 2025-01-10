import { IsInt, IsOptional, IsString } from 'class-validator';

export class ProductCategoriesDTO {
  @IsInt()
  id: number;

  @IsInt()
  category_id: number;

  @IsInt()
  product_id: number;

  @IsOptional()
  @IsString()
  created_at?: string;

  @IsOptional()
  @IsString()
  updated_at?: string;
}
