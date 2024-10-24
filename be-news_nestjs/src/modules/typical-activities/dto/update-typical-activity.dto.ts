import { PartialType } from '@nestjs/swagger';
import { CreateTypicalActivityDto } from './create-typical-activity.dto';

export class UpdateTypicalActivityDto extends PartialType(CreateTypicalActivityDto) {}
