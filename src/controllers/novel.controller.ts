import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Novel } from "@prisma/client";
import { BaseResponse } from "src/dtos/response.dto";
import NovelService from "src/services/novel.service";
import ResponseBuilder from "src/utils/response.builder";

@ApiTags('novel')
@Controller('novel')
export default class NovelController {
    constructor(private readonly novelService: NovelService) {}

    @Get('list')
    public async getListNovel(): Promise<BaseResponse<Novel[]>> {
        return await this.novelService.getNovelList();
    }
}
