import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Novel, Chapter as PrismaChapter } from "@prisma/client";
import { BaseResponse } from "src/dtos/response.dto";
import { Chapter } from "src/repositories/nosql/chapter.schema";
import NovelService from "src/services/novel.service";

@ApiTags('novel')
@Controller('novel')
export default class NovelController {
    constructor(private readonly novelService: NovelService) {}

    @Get('list')
    public async getListNovel(): Promise<BaseResponse<Novel[]>> {
        return await this.novelService.getNovelList();
    }

    @Get('chapter/list/:id')
    public async getChapterListByNovelId(@Param() params: any): Promise<BaseResponse<PrismaChapter[]>> {
        return await this.novelService.getChapterListByNovelId(Number(params.id));
    }

    @Get('chapter/:id')
    public async getChapterById(@Param() params: any): Promise<BaseResponse<Chapter>> {
        return await this.novelService.getChapterById(Number(params.id));
    }

    // @Get('insert_chapter')
    // public async insertChapter(): Promise<BaseResponse<any>> {
    //     return await this.novelService.insertChapter();
    // }

    // @Get('create_novel')
    // public async createNovel(): Promise<BaseResponse<any>> {
    //     return await this.novelService.createNovel();
    // }
}
