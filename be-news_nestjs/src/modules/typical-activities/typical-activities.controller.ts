import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
  UploadedFiles,
} from '@nestjs/common';
import { TypicalActivitiesService } from './typical-activities.service';
import { CreateTypicalActivityDto } from './dto/create-typical-activity.dto';
import { UpdateTypicalActivityDto } from './dto/update-typical-activity.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';

@Controller('typical-activities')
export class TypicalActivitiesController {
  constructor(
    private readonly typicalActivitiesService: TypicalActivitiesService,
  ) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files', 5))
  @ApiConsumes('multipart/form-data')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(
    @Body() createTypicalActivityDto: CreateTypicalActivityDto,
    @UploadedFiles() files: Array<Express.Multer.File>, // Handle array of files
  ) {
    try {
      console.log(createTypicalActivityDto);
      console.log(files);

      return this.typicalActivitiesService.create(
        createTypicalActivityDto,
        files,
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get()
  findAll() {
    return this.typicalActivitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typicalActivitiesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypicalActivityDto: UpdateTypicalActivityDto,
  ) {
    return this.typicalActivitiesService.update(+id, updateTypicalActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typicalActivitiesService.remove(+id);
  }
}
