import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

import { Category } from 'src/modules/category/schema/category.schema';
import { User } from 'src/modules/users/schema/user.schema';

@Schema({ timestamps: true })
export class Article extends Document {
  @Prop({ required: true })
  author: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  category: Category;

  @Prop({ required: true })
  content: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  thumbnail: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: String, enum: ['draft', 'published'], default: 'draft' })
  status: string;

  @Prop({ type: [String] }) // Tags as an array of strings
  tags: string[];
  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Type' })
  // type: Type;

  @Prop({ type: Number, default: 0 })
  views: number;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;

  @Prop({ type: Date, default: null })
  deletedAt: Date;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
