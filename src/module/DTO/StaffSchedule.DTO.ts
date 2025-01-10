import {
  IsInt,
  IsString,
  IsEnum,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class StaffSchedulesDTO {
  @IsInt()
  id: number;

  @IsInt()
  staff_id: number;

  @IsDateString()
  shift_start: string;

  @IsDateString()
  shift_end: string;

  @IsEnum(['worked', 'missed'])
  status: 'worked' | 'missed';

  @IsOptional()
  @IsString()
  created_at?: string;

  @IsOptional()
  @IsString()
  updated_at?: string;
}
