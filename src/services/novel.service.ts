import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Novel } from "@prisma/client";
import { BaseResponse } from "src/dtos/response.dto";
import NovelRepository from "src/repositories/novel.repo";
import ResponseBuilder from "src/utils/response.builder";

@Injectable()
export default class NovelService {
    constructor(private readonly novelRepository: NovelRepository) {}
    
    public async getNovelList(): Promise<BaseResponse<Novel[]>> {
        return ResponseBuilder.success(await this.novelRepository.getNovelList());
    }


}