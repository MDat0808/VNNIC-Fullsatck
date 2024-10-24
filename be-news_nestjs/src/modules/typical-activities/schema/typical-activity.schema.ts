import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ _id: false }) // _id is false to avoid generating an _id for each object in the array
export class TypicalActivityItem {
  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  description: string;
}

const TypicalActivityItemSchema =
  SchemaFactory.createForClass(TypicalActivityItem);

@Schema()
export class TypicalActivity {
  @Prop({
    type: String,
    ref: 'UnionMemberOutsanding',
    required: true,
  })
  memberCode: string;

  @Prop({ type: [TypicalActivityItemSchema], required: true })
  typicalActivities: TypicalActivityItem[];
}

export const TypicalActivitiesSchema =
  SchemaFactory.createForClass(TypicalActivity);
