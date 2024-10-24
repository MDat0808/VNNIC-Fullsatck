import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { TypesModule } from './modules/types/types.module';
import { CategoryModule } from './modules/category/category.module';
import { ArticlesModule } from './modules/articles/articles.module';
import { BannerModule } from './modules/banner/banner.module';
import { MemoryStoredFile, NestjsFormDataModule } from 'nestjs-form-data';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { UnionMemberOutsandingModule } from './modules/union-member-outsanding/union-member-outsanding.module';
import { TypicalActivitiesModule } from './modules/typical-activities/typical-activities.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URI'),
      }),
    }),
    NestjsFormDataModule.config({ storage: MemoryStoredFile }),
    CategoryModule,
    ArticlesModule,
    TypesModule,
    UsersModule,
    BannerModule,
    CloudinaryModule,
    UnionMemberOutsandingModule,
    TypicalActivitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
