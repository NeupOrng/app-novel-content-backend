import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import NovelController from './controllers/novel.controller';
import NovelService from './services/novel.service';
import { AppService } from './services/app.service';

@Module({
  imports: [],
  controllers: [AppController, NovelController],
  providers: [AppService, NovelService],
})
export class AppModule {}
