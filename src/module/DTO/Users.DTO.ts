import { IsString, IsNotEmpty, IsEnum, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  avatar: string;

  @IsEnum(['admin', 'staff', 'customer'])
  @IsNotEmpty()
  role: string;

  @IsString()
  @IsNotEmpty()
  phone_number: string;
}
export class UpdateUserDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  avatar: string;

  @IsEnum(['admin', 'staff', 'customer'])
  role: string;

  @IsString()
  phone_number: string;
}
