import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Timeline {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true, type: Date })
  time: Date;
}

export const TimelineSchema = SchemaFactory.createForClass(Timeline);
