import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UsePipes,
  ValidationPipe,
  UploadedFiles,
} from '@nestjs/common';
import { UnionMemberOutsandingService } from './union-member-outsanding.service';
import { CreateUnionMemberOutsandingDto } from './dto/create-union-member-outsanding.dto';
import { UpdateUnionMemberOutsandingDto } from './dto/update-union-member-outsanding.dto';
import { ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { TimelineDto } from './dto/timeline.dto';

@Controller('union-member-outsanding')
export class UnionMemberOutsandingController {
  constructor(
    private readonly unionMemberOutsandingService: UnionMemberOutsandingService,
  ) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files', 2)) // Maximum 2 files
  @ApiConsumes('multipart/form-data')
  @UsePipes(ValidationPipe)
  async create(
    @Body() createUnionMemberOutsandingDto: CreateUnionMemberOutsandingDto,
    @UploadedFiles() files: Array<Express.Multer.File>, // Handle array of files
  ) {
    try {
      const avatar = files[0]; // First file for avatar
      const image = files[1]; // Second file for image

      return this.unionMemberOutsandingService.create(
        createUnionMemberOutsandingDto,
        avatar,
        image,
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get()
  findAll() {
    return this.unionMemberOutsandingService.findAll();
  }

  @Get('/detail/:id')
  findOne(@Param('id') id: string) {
    return this.unionMemberOutsandingService.findOne(id);
  }

  @Get('/summary')
  findAllSummary() {
    return this.unionMemberOutsandingService.getAllUnionMemberSummary();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUnionMemberOutsandingDto: UpdateUnionMemberOutsandingDto,
  ) {
    return this.unionMemberOutsandingService.update(
      id,
      updateUnionMemberOutsandingDto,
    );
  }

  @Patch('/timeline/:id')
  updateTimeline(
    @Param('id') id: string,
    @Body() updateTimeline: TimelineDto[],
  ) {
    return this.unionMemberOutsandingService.updateTimeLine(id, updateTimeline);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unionMemberOutsandingService.remove(id);
  }
}
