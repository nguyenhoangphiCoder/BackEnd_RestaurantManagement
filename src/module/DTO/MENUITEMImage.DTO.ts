import { IsInt, IsString, IsOptional } from 'class-validator';

export class MenuItemImagesDTO {
  @IsInt()
  id: number;

  @IsInt()
  menu_item_id: number;

  @IsString()
  image_url: string;

  @IsOptional()
  @IsString()
  created_at?: string;

  @IsOptional()
  @IsString()
  updated_at?: string;
}
