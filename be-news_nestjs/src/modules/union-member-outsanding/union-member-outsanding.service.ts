import { Injectable } from '@nestjs/common';
import { CreateUnionMemberOutsandingDto } from './dto/create-union-member-outsanding.dto';
import { UpdateUnionMemberOutsandingDto } from './dto/update-union-member-outsanding.dto';
import { UnionMemberOutsanding } from './schema/union-member-outsanding.schema';
import { Model } from 'mongoose';
import {
  CloudinaryThumbNailService,
  CloudinaryUnionMemberAdsService,
} from 'src/cloudinary/cloudinary.service';
import { InjectModel } from '@nestjs/mongoose';
import { generateSlugUnique } from 'src/common/helpers/slug-unique';
import { TimelineDto } from './dto/timeline.dto';
import { Timeline } from './schema/timeline.schema';

@Injectable()
export class UnionMemberOutsandingService {
  constructor(
    @InjectModel(UnionMemberOutsanding.name)
    private readonly unionMemberOutstandingModel: Model<UnionMemberOutsanding>,
    private readonly cloudinaryUnionMemberService: CloudinaryUnionMemberAdsService,
  ) {}

  async create(
    createUnionMemberOutsandingDto: CreateUnionMemberOutsandingDto,
    avatar: Express.Multer.File,
    image: Express.Multer.File,
  ): Promise<Object> {
    try {
      const memberCode = generateSlugUnique(
        createUnionMemberOutsandingDto.information.fullName,
      );
      const urlAvatar = (
        await this.cloudinaryUnionMemberService.uploadFile(avatar)
      ).secure_url;
      const urlImage = (
        await this.cloudinaryUnionMemberService.uploadFile(image)
      ).secure_url;

      createUnionMemberOutsandingDto.image = urlImage;
      createUnionMemberOutsandingDto.information.avatar = urlAvatar;

      const newUnionMmberOutstanding = new this.unionMemberOutstandingModel({
        ...createUnionMemberOutsandingDto,
        memberCode: memberCode,
      });
      const res = await newUnionMmberOutstanding.save().catch((err) => {
        throw new Error(err);
      });
      if (res) {
        return {
          mess: 'Create unionMemberOutstanding success.',
          data: res,
        };
      } else {
        return {
          mess: 'Create unionMemberOutstanding faile.',
        };
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(): Promise<UnionMemberOutsanding[]> {
    return await this.unionMemberOutstandingModel.find().exec();
  }

  async findOne(id: string): Promise<UnionMemberOutsanding> {
    const unionMemberOutsanding: UnionMemberOutsanding =
      await this.unionMemberOutstandingModel.findOne({ memberCode: id }).exec();
    if (!unionMemberOutsanding) {
      throw new Error(`unionMemberOutsanding with ${id} not found`);
    }
    return unionMemberOutsanding;
  }

  // async getDetailUnionMember(id: string): Promise<UnionMemberOutsanding> {
  //   const unionMemberOutsanding: UnionMemberOutsanding =
  //     await this.unionMemberOutstandingModel.findOne({ memberCode: id }).exec();
  //   if (!unionMemberOutsanding) {
  //     throw new Error(`unionMemberOutsanding with ${id} not found`);
  //   }
  //   return unionMemberOutsanding;
  // }

  async getAllUnionMemberSummary(): Promise<Object[]> {
    const unionMemberOutsanding: UnionMemberOutsanding[] =
      await this.unionMemberOutstandingModel
        .find({}, 'image information typicalInfo memberCode')
        .lean()
        .exec();
    if (!unionMemberOutsanding) {
      throw new Error(`unionMemberOutsanding is emty`);
    }
    return unionMemberOutsanding;
  }

  update(
    id: string,
    updateUnionMemberOutsandingDto: UpdateUnionMemberOutsandingDto,
  ) {
    return `This action updates a #${id} unionMemberOutsanding`;
  }

  async updateTimeLine(id: string, timelines: TimelineDto[]) {
    // Find the document using the memberCode (or other unique identifier)
    const unionMemberOutsanding = await this.unionMemberOutstandingModel
      .findOne({ memberCode: id })
      .exec();

    if (!unionMemberOutsanding) {
      throw new Error(`Union member with code ${id} not found`);
    }
    timelines.forEach((item, index) => {
      const { description, time } = item;
      const timeline: Timeline = {
        description,
        time,
      };
      unionMemberOutsanding.timeline.push(timeline); // Push the new timeline items into the array
    });
    // Add the new timelines to the existing timeline array

    // Save the updated document
    await unionMemberOutsanding.save();

    return {
      message: 'Timeline updated successfully',
      data: unionMemberOutsanding,
    };
  }

  remove(id: string) {
    return `This action removes a #${id} unionMemberOutsanding`;
  }
}
