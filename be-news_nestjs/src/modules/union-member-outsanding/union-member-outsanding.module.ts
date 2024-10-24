import { Module } from '@nestjs/common';
import { UnionMemberOutsandingService } from './union-member-outsanding.service';
import { UnionMemberOutsandingController } from './union-member-outsanding.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UnionMemberOutsanding,
  UnionMemberOutsandingSchema,
} from './schema/union-member-outsanding.schema';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UnionMemberOutsanding.name, schema: UnionMemberOutsandingSchema },
    ]),
    CloudinaryModule,
  ],
  controllers: [UnionMemberOutsandingController],
  providers: [UnionMemberOutsandingService],
})
export class UnionMemberOutsandingModule {}
