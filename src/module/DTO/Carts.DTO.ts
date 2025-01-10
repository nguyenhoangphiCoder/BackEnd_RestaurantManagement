import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
export class CreateCartDTO {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  user_id: number;
}
export class UpdateCartDTO {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  user_id: number;
}
