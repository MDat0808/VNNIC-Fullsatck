import { PartialType } from '@nestjs/mapped-types';
import { CreateCategotyDto } from './create-categoty.dto';

export class UpdateCategotyDto extends PartialType(CreateCategotyDto) {}
