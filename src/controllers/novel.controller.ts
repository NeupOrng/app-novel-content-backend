import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BaseResponse } from "src/dtos/response.dto";
import NovelService from "src/services/novel.service";
import ResponseBuilder from "src/utils/response.builder";

@ApiTags('novel')
@Controller('novel')
export default class NovelController {
    constructor(private readonly novelService: NovelService) {}

    @Get('list')
    public getListNovel(): BaseResponse<string[]> {
        return this.novelService.getNovelList();
    }
}
