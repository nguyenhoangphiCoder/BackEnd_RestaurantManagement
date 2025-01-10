import { IsInt, IsString, IsDateString, IsOptional } from 'class-validator';

export class PasswordResetTokensDTO {
  @IsInt()
  id: number;

  @IsInt()
  user_id: number;

  @IsString()
  token: string;

  @IsDateString()
  expired_at: string;

  @IsOptional()
  @IsString()
  created_at?: string;
}
