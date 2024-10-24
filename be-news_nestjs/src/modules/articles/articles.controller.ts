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
  BadRequestException,
  Query,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { CloudinaryThumbNailService } from 'src/cloudinary/cloudinary.service';
import { Article } from './schema/article.schema';
@Controller('/articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('thumbnail'))
  @ApiConsumes('multipart/form-data')
  async create(
    @Body() createArticleDto: CreateArticleDto,
    @UploadedFile() thumbnail: Express.Multer.File,
  ) {
    try {
      return this.articlesService.create(createArticleDto, thumbnail);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  @Get('/detail/id/:id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(id);
  }

  @Get('/detail/:slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.articlesService.findOneBySlug(slug);
  }

  @Get('/related/:slug')
  getArticlesRelated(@Param('slug') slug: string) {
    return this.articlesService.getArticlesRelated(slug);
  }

  @Get('/status/draft')
  getArticlesDraf() {
    return this.articlesService.getArticlesDraft();
  }

  @Get('/status/published')
  getArticlesPublished() {
    return this.articlesService.getArticlesPublished();
  }

  @Get('/category/:slug')
  getArticlesByCategory(@Param('slug') slug: string) {
    return this.articlesService.getArticlesByCategory(slug);
  }

  @Get('/latest/:slug')
  getArticlesLatestByCategory(@Param('slug') slug: string) {
    return this.articlesService.getArticlesLatestByCategory(slug);
  }

  @Get('/featured/:limit')
  getArticlesFeatured(@Param('limit') limit: number) {
    return this.articlesService.getArticlesFeatured(limit);
  }

  @Get('trending')
  async getTrendingArticles(
    @Query('limit') limit: number = 10,
  ): Promise<Article[]> {
    return this.articlesService.getTrendingArticles(limit);
  }

  @Get('search')
  async searchArticles(@Query('q') query: string): Promise<Article[]> {
    return this.articlesService.searchArticles(query);
  }

  @Patch('/accept')
  acceptArticles(@Body() body: { ids: string[] }) {
    return this.articlesService.acceptArticles(body.ids);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(id);
  }
}
