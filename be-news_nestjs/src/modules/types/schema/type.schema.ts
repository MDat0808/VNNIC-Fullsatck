import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Type extends Document {
  @Prop({ require: true })
  name: string;
}

export const TypeSchema = SchemaFactory.createForClass(Type);
