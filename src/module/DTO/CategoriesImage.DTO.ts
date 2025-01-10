import { IsInt, IsString, IsOptional } from 'class-validator';

export class CategoryImagesDTO {
  @IsInt()
  id: number;

  @IsInt()
  category_id: number;

  @IsString()
  image_url: string;

  @IsOptional()
  @IsString()
  created_at?: string;

  @IsOptional()
  @IsString()
  updated_at?: string;
}
