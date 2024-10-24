import { Module } from '@nestjs/common';
import { TypicalActivitiesService } from './typical-activities.service';
import { TypicalActivitiesController } from './typical-activities.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TypicalActivitiesSchema,
  TypicalActivity,
} from './schema/typical-activity.schema';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { UnionMemberOutsandingModule } from '../union-member-outsanding/union-member-outsanding.module';
import {
  UnionMemberOutsanding,
  UnionMemberOutsandingSchema,
} from '../union-member-outsanding/schema/union-member-outsanding.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TypicalActivity.name, schema: TypicalActivitiesSchema },
      { name: UnionMemberOutsanding.name, schema: UnionMemberOutsandingSchema },
    ]),
    CloudinaryModule,
  ],
  controllers: [TypicalActivitiesController],
  providers: [TypicalActivitiesService],
})
export class TypicalActivitiesModule {}
