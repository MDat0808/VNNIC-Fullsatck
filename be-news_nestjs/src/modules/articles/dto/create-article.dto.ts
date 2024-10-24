import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @IsNotEmpty()
  author: string;
  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  content: string;
  @ApiProperty({ type: 'string', format: 'binary' })
  thumbnail: any;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  tags: string;
}
