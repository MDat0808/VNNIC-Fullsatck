import { Injectable } from '@nestjs/common';
import { CreateTypicalActivityDto } from './dto/create-typical-activity.dto';
import { UpdateTypicalActivityDto } from './dto/update-typical-activity.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TypicalActivity } from './schema/typical-activity.schema';
import { CloudinaryUnionMemberAdsService } from 'src/cloudinary/cloudinary.service';
import { Model } from 'mongoose';
import { UnionMemberOutsanding } from '../union-member-outsanding/schema/union-member-outsanding.schema';
import { error } from 'console';

@Injectable()
export class TypicalActivitiesService {
  constructor(
    @InjectModel(TypicalActivity.name)
    private readonly typicalActivitiesModel: Model<TypicalActivity>,
    @InjectModel(UnionMemberOutsanding.name)
    private readonly unionMemberOutstandingModel: Model<UnionMemberOutsanding>,
    private readonly cloudinaryUnionMemberService: CloudinaryUnionMemberAdsService,
  ) {}

  async create(
    createTypicalActivityDto: CreateTypicalActivityDto,
    files: Array<Express.Multer.File>,
  ): Promise<Object> {
    try {
      const unionMemberExisting: UnionMemberOutsanding =
        await this.unionMemberOutstandingModel
          .findOne({ memberCode: createTypicalActivityDto.memberCode })
          .exec()
          .catch((error) => {
            throw new Error(
              'UnionMember does not match with memberCode' +
                createTypicalActivityDto.memberCode,
            );
          });
      if (!unionMemberExisting) {
        throw new Error('UnionMember does not exist');
      }
      const newTypicalActivity: TypicalActivity = {
        memberCode: createTypicalActivityDto.memberCode,
        typicalActivities: await Promise.all(
          createTypicalActivityDto.typicalActivities.map(
            async (item, index) => ({
              description: item.description,
              image: (
                await this.cloudinaryUnionMemberService.uploadFile(files[index])
              ).secure_url, // Upload each file and get the secure URL
            }),
          ),
        ),
      };

      const typicalActivitiesSchema = new this.typicalActivitiesModel(
        newTypicalActivity,
      );

      const res = await typicalActivitiesSchema.save().catch((err) => {
        throw new Error(err);
      });
      if (res) {
        return {
          mess: 'Create typical activities success.',
          data: res,
        };
      } else {
        return {
          mess: 'Create typical activities faile.',
        };
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  findAll() {
    return `This action returns all typicalActivities`;
  }

  async findOne(id: string): Promise<TypicalActivity> {
    const typicalActivities: TypicalActivity = await this.typicalActivitiesModel
      .findOne({
        memberCode: id,
      })
      .exec();
    if (!typicalActivities) {
      throw new Error(`TypicalActivities with ${id} not found`);
    }
    return typicalActivities;
  }

  update(id: number, updateTypicalActivityDto: UpdateTypicalActivityDto) {
    return `This action updates a #${id} typicalActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} typicalActivity`;
  }
}
