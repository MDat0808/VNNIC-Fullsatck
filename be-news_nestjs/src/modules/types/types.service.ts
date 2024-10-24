import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Type } from './schema/type.schema';
import { Model } from 'mongoose';
import { TypesModule } from './types.module';

@Injectable()
export class TypesService {
  constructor(
    @InjectModel(Type.name) private readonly typeModel: Model<Type>,
  ) {}

  async create(createTypeDto: CreateTypeDto): Promise<Type> {
    try {
      const createdType = new this.typeModel(createTypeDto);
      return createdType.save();
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Type[] | null> {
    return this.typeModel.find().exec();
  }

  async findOne(id: string): Promise<Type | null> {
    return this.typeModel.findById(id);
  }

  update(id: number, updateTypeDto: UpdateTypeDto) {
    return `This action updates a #${id} type`;
  }

  remove(id: number) {
    return `This action removes a #${id} type`;
  }
}
