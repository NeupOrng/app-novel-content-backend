import { ErrorCode } from "src/constants/enums/error-code.enum";

export class BaseResponse<T> {
    data: T;
    code: number;
    message: string;

    constructor(data: T, code: ErrorCode, message: string) {
        this.data = data;
        this.code = code;
        this.message = message;
    }
}