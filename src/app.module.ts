import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './controllers/app.controller';
import NovelController from './controllers/novel.controller';
import NovelService from './services/novel.service';
import { AppService } from './services/app.service';
import PrismaService from './repositories/prisma.service';
import NovelRepository from './repositories/sql/novel.repo';
import { ChapterDocument, Chapter, ChapterSchema } from './repositories/nosql/chapter.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI, {dbName: 'novel-app'}),
    MongooseModule.forFeature([{ name: Chapter.name, schema: ChapterSchema },])
  ],
  controllers: [AppController, NovelController],
  providers: [
    AppService,
    NovelService,
    PrismaService,
    NovelRepository
  ],
})
export class AppModule {}
