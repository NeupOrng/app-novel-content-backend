import { Injectable } from "@nestjs/common";
import { BaseResponse } from "src/dtos/response.dto";
import ResponseBuilder from "src/utils/response.builder";

@Injectable()
export default class NovelService {
    
    public getNovelList(): BaseResponse<string[]> {
        return ResponseBuilder.success([]);
    }
}