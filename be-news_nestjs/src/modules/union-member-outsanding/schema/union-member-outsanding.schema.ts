import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Information, InformationSchema } from './information.schema';
import { Timeline, TimelineSchema } from './timeline.schema';

@Schema()
export class UnionMemberOutsanding extends Document {
  @Prop({ type: InformationSchema, require: true, _id: false })
  information: Information;

  @Prop({ type: [Timeline], require: true, _id: false })
  timeline: Timeline[];

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  introduce: string;

  @Prop({ required: true })
  memberCode: string;

  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  typicalInfo: string;
}

export const UnionMemberOutsandingSchema = SchemaFactory.createForClass(
  UnionMemberOutsanding,
);
