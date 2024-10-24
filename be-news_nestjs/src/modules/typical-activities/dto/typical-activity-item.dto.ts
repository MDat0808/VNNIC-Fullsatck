import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class TypicalActivityItemDto {
  @IsString()
  @IsNotEmpty()
  description: string;
}
