import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import NovelController from './controllers/novel.controller';
import NovelService from './services/novel.service';
import { AppService } from './services/app.service';
import PrismaService from './repositories/prisma.service';
import NovelRepository from './repositories/novel.repo';

@Module({
  imports: [],
  controllers: [AppController, NovelController],
  providers: [
    AppService,
    NovelService,
    PrismaService,
    NovelRepository
  ],
})
export class AppModule {}
