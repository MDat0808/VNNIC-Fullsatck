import { IsString, IsNotEmpty, IsEmail, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class InformationDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsDate() // Ensures that the field is a valid date
  @Type(() => Date) // Transforms input to a Date object
  @IsNotEmpty()
  dayOfBirth: Date;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsEmail() // Ensures the string is a valid email address
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: 'string', format: 'binary' })
  avatar: any;
}
