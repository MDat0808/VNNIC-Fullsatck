import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Banner extends Document {
  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  thumbnail: string;

  @Prop({ required: true })
  tag: string;

  @Prop({ default: false })
  isEnable: boolean;
}

export const BannerSchema = SchemaFactory.createForClass(Banner);
