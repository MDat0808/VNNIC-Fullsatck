import { Injectable } from '@nestjs/common';
import { CreateCategotyDto } from './dto/create-categoty.dto';
import { UpdateCategotyDto } from './dto/update-categoty.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './schema/category.schema';
import { generateSlug } from 'src/common/helpers/slug-helpers';
@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
  ) {}
  async create(createCategoryDto: CreateCategotyDto): Promise<Object> {
    try {
      const slug = generateSlug(createCategoryDto.name);

      const createCategory = new this.categoryModel({
        ...createCategoryDto,
        slug: slug,
      });
      let res = await createCategory.save();
      if (res) {
        return {
          message: 'Create category success.',
          data: res,
        };
      } else {
        return {
          message: 'Create category failed.',
        };
      }
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryModel.find();
  }

  async findOne(id: string): Promise<Category | null> {
    return await this.categoryModel.findById(id);
  }
  async findOneBySlug(slug: string): Promise<Category | null> {
    return await this.categoryModel.findOne({ slug: slug });
  }

  update(id: number, updateCategotyDto: UpdateCategotyDto) {
    return `This action updates a #${id} categoty`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoty`;
  }
}
