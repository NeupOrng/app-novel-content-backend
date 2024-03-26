import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Novel } from "@prisma/client";
import { BaseResponse } from "src/dtos/response.dto";
import NovelRepository from "src/repositories/sql/novel.repo";
import ResponseBuilder from "src/utils/response.builder";
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Chapter } from "src/repositories/nosql/chapter.schema";

@Injectable()
export default class NovelService {
    constructor(
        private readonly novelRepository: NovelRepository, 
        @InjectModel(Chapter.name) private readonly chapterModel: Model<Chapter>,
        ) {}
    
    public async getNovelList(): Promise<BaseResponse<Novel[]>> {
        const createChapter = await this.chapterModel.create(
            {
                title: 'hero comming',
                content: 'hero comming'
            }
        );

        console.log(createChapter);
        return ResponseBuilder.success(await this.novelRepository.getNovelList());
    }


}