import { HttpStatus } from "@nestjs/common";

export class BaseResponse<T> {
    data: T;
    statusCode: number;
    message: string;

    constructor(data: T, statusCode: HttpStatus, message: string) {
        this.data = data;
        this.statusCode = statusCode;
        this.message = message;
    }
}