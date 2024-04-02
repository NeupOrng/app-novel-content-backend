import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Novel, Chapter as PrismaChapter } from "@prisma/client";
import { BaseResponse } from "src/dtos/response.dto";
import NovelRepository from "src/repositories/sql/novel.repo";
import ResponseBuilder from "src/utils/response.builder";
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model, ObjectIdQueryTypeCasting } from 'mongoose';
import { Chapter } from "src/repositories/nosql/chapter.schema";

@Injectable()
export default class NovelService {
    constructor(
        private readonly novelRepository: NovelRepository, 
        @InjectModel(Chapter.name) private readonly chapterModel: Model<Chapter>,
        ) {}
    
    public async getNovelList(): Promise<BaseResponse<Novel[]>> {
        const createChapter = await this.chapterModel.find()

        console.log(createChapter);
        return ResponseBuilder.success(await this.novelRepository.getNovelList());
    }

    public async getChapterListByNovelId(novelId: number): Promise<BaseResponse<PrismaChapter[]>> {
        return ResponseBuilder.success(await this.novelRepository.getChapterList(novelId));
    }

    public async getChapterById(chapterId: number): Promise<BaseResponse<Chapter>> {
        const chapter = await this.novelRepository.getChapterById(chapterId);

        return await this.chapterModel.findOne({_id: chapter.chapterId })
    }

    public async createNovel(): Promise<BaseResponse<any>> {
        const novelName = 'The Amazing Son-in-law';

        this.novelRepository.insertNewNovel({ title: novelName, author: '', genre: '', description: '', coverImage: ''});

        return ResponseBuilder.success(null);
    }

    public async insertChapter(): Promise<BaseResponse<any>> {
        const chapters = await this.chapterModel.find();
        
        chapters.forEach(async (chapter) => {
            await this.novelRepository.insertNewChapter(chapter._id.toHexString(), chapter.title, 1)
        });

        return ResponseBuilder.success(await this.novelRepository.getChapterList(1));
    }


}