import { IsNotEmpty } from 'class-validator';

export class CreateCategotyDto {
  @IsNotEmpty()
  name: string;
}
