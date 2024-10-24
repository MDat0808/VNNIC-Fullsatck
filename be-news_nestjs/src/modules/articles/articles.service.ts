import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './schema/article.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { generateSlugUnique } from 'src/common/helpers/slug-unique';
import { Category } from '../category/schema/category.schema';
import { Type } from '../types/schema/type.schema';
import { User } from '../users/schema/user.schema';
import { CloudinaryThumbNailService } from 'src/cloudinary/cloudinary.service';
import * as diacritics from 'diacritics';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private readonly articleModel: Model<Article>,
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly cloudinaryService: CloudinaryThumbNailService,
  ) {}
  normalizeString(str: string): string {
    return diacritics.remove(str); // This removes accents from characters
  }
  async create(
    createArticleDto: CreateArticleDto,
    thumbnail: Express.Multer.File,
  ): Promise<Object> {
    const category: Category = await this.categoryModel
      .findById(createArticleDto.category)
      .catch((err) => {
        throw new Error('Category does not exist');
      });

    // const author: User = await this.userModel
    //   .findById(createArticleDto.author)
    //   .catch((err) => {
    //     throw new Error('User does not exist');
    //   });

    const slug = generateSlugUnique(createArticleDto.title);
    const tags = createArticleDto.tags.split(',').map((tag) => tag.trim());
    const urlThumbnail = (await this.cloudinaryService.uploadFile(thumbnail))
      .secure_url;
    createArticleDto.thumbnail = urlThumbnail;

    const createdArticle = new this.articleModel({
      ...createArticleDto,
      slug: slug,
      tags: tags,
    });
    const res = await createdArticle.save().catch((err) => {
      throw new Error(err);
    });
    if (res) {
      return {
        mess: 'Create Article success.',
        data: res,
      };
    } else {
      return {
        mess: 'Create article faile.',
      };
    }
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().populate('author category').exec();
  }

  // async getHomePageArticles(): Promise<Article[]> {
  //   const articlesSpolight = this.articleModel
  //     .find()
  //     .populate('author category')
  //     .sort({ createAt: -1 })
  //     .exec();

  //   const articlesByCategory : Article[] =

  //   return this.articleModel.find().populate('author category').exec();
  // }

  async findOne(id: string): Promise<Article> {
    const article: Article = await this.articleModel
      .findById(id)
      .populate('author category')
      .exec();
    if (!article) {
      throw new Error(`Article with ${id} not found`);
    }
    return article;
  }

  async findOneBySlug(slug: string): Promise<Article> {
    const article: Article = await this.articleModel
      .findOne({ slug: slug, status: 'published' })
      .populate('category')
      .exec();
    console.log(slug);

    if (!article) {
      throw new Error(`Article with ${slug} not found`);
    }
    return article;
  }

  async getArticlesDraft(): Promise<Article[]> {
    const articles = this.articleModel
      .find({ status: 'draft', isDeleted: false })
      .populate('author category ')
      .exec()
      .catch((err) => {
        throw new Error(err);
      });

    return articles;
  }

  async getArticlesPublished(): Promise<Article[]> {
    const articles = await this.articleModel
      .find({ status: 'published', isDeleted: false })
      .populate('author category')
      .exec()
      .catch((err) => {
        throw new Error(err);
      });

    return articles;
  }

  async getArticlesByCategory(slug: string): Promise<Article[]> {
    const articles = await this.articleModel
      .find({ status: 'published', isDeleted: false })
      .populate({
        path: 'category',
        match: { slug },
      })
      .populate('author')
      .exec()
      .catch((err) => {
        throw new Error(err);
      });

    return articles.filter((article) => article.category);
  }

  async getArticlesLatestByCategory(slug: string): Promise<Article[]> {
    const articles = this.articleModel
      .find({ status: 'published', isDeleted: false })
      .populate({
        path: 'category',
        match: { slug },
      })
      .populate('author')
      .sort({ createAt: -1 })
      .exec()
      .catch((err) => {
        throw new Error(err);
      });

    return articles;
  }

  async getArticlesRelated(slug: string): Promise<Article[]> {
    const article = await this.articleModel.findOne({ slug: slug }).exec();
    const articles = await this.articleModel
      .find({
        status: 'published',
        isDeleted: false,
        slug: { $ne: slug }, // Exclude the current article
        $or: [
          { category: article.category }, // Match articles with the same category
          { tags: { $in: article.tags } }, // Match articles with the same tags
        ],
      })
      .limit(4)
      .populate('category')
      .sort({ createAt: -1 })
      .exec()
      .catch((err) => {
        throw new Error(err);
      });
    console.log(articles);

    return articles;
  }

  async getArticlesFeatured(limit: number): Promise<Article[]> {
    console.log(limit);

    const articles = await this.articleModel
      .find({
        status: 'published',
        isDeleted: false,
      })
      .populate('category')
      .sort({ createAt: -1 })
      .limit(limit)
      .exec()
      .catch((err) => {
        throw new Error(err);
      });

    return articles;
  }

  async getTrendingArticles(limit: number): Promise<Article[]> {
    const articles = await this.articleModel
      .find({
        status: 'published',
        isDeleted: false,
      })
      .populate('category')
      .sort({ views: -1, createAt: -1 })
      .limit(limit)
      .exec()
      .catch((err) => {
        throw new Error(err);
      });

    return articles;
  }

  async searchArticles(query: string): Promise<Article[]> {
    return await this.articleModel
      .find({
        status: 'published',
        isDeleted: false,
        $or: [
          { title: { $regex: query, $options: 'i' } }, // Search in title
          { description: { $regex: query, $options: 'i' } }, // Search in description
          { tags: { $regex: query, $options: 'i' } }, // Search in tags
          { author: { $regex: query, $options: 'i' } }, // Search in author name
        ],
      })
      .populate('category') // Populate the category details
      .sort({ createdAt: -1 }) // Sort by newest articles
      .exec();
  }

  // async getArticlesByType(name: string): Promise<Article[]> {
  //   const articles = this.articleModel
  //     .find({ status: 'published', isDeleted: false })
  //     .populate({
  //       path: 'type',
  //       match: { name },
  //     })
  //     .populate('author category')
  //     .exec()
  //     .catch((err) => {
  //       throw new Error(err);
  //     });

  //   return articles;
  // }

  async acceptArticles(ids: string[]): Promise<string> {
    ids.map(async (id) => {
      await this.articleModel
        .findByIdAndUpdate(id, { status: 'published' })
        .catch((err) => {
          throw new Error(err);
        });
    });

    return 'Accept articles success';
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  async remove(id: string): Promise<string> {
    const article = await this.articleModel
      .findByIdAndUpdate(id, {
        isDeleted: true,
      })
      .catch((error) => {
        throw new Error(error);
      });
    return 'Delete article success';
  }
}
