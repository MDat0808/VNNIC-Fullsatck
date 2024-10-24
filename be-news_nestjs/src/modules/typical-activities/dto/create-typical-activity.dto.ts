import { IsString, IsNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { TypicalActivityItemDto } from './typical-activity-item.dto';

export class CreateTypicalActivityDto {
  @IsString()
  @IsNotEmpty()
  memberCode: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TypicalActivityItemDto)
  typicalActivities: TypicalActivityItemDto[];
}
