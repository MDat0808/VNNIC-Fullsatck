import {
  IsString,
  IsNotEmpty,
  ValidateNested,
  IsObject,
} from 'class-validator';
import { Type } from 'class-transformer';
import { InformationDto } from './information.dto';
import { TimelineDto } from './timeline.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUnionMemberOutsandingDto {
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => InformationDto)
  information: InformationDto;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => TimelineDto)
  timeline: TimelineDto[];

  @ApiProperty({ type: 'string', format: 'binary' })
  image: any;

  @IsString()
  @IsNotEmpty()
  introduce: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsString()
  @IsNotEmpty()
  typicalInfo: string;
}
