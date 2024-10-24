import { PartialType } from '@nestjs/swagger';
import { CreateUnionMemberOutsandingDto } from './create-union-member-outsanding.dto';

export class UpdateUnionMemberOutsandingDto extends PartialType(CreateUnionMemberOutsandingDto) {}
