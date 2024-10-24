import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Information {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, type: Date })
  dayOfBirth: Date;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  avatar: string;
}

export const InformationSchema = SchemaFactory.createForClass(Information);
