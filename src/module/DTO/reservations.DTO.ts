import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateReservationDTO {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsNumber()
  @IsNotEmpty()
  table_id: number;

  @IsNumber()
  @IsNotEmpty()
  number_of_people: number;

  @IsDate()
  @IsNotEmpty()
  reservation_time: Date;

  @IsString()
  special_request: string;

  @IsString()
  status: string;
}
export class UpdateReservationDTO {
  @ApiProperty()
  @IsNumber()
  user_id: number;

  @IsNumber()
  table_id: number;

  @IsNumber()
  number_of_people: number;

  @IsDate()
  reservation_time: Date;

  @IsString()
  special_request: string;

  @IsString()
  status: string;
}
