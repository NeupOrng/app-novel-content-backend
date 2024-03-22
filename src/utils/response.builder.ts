import { ErrorCode } from 'src/constants/enums/error-code.enum';
import { BaseResponse } from '../dtos/response.dto';
import { ErrorMessageMap } from 'src/constants/error-message-map';
import { HttpStatus } from '@nestjs/common';

export default class ResponseBuilder {
  static success<T>(data: T): BaseResponse<T> {
    return new BaseResponse<T>(data, HttpStatus.OK, ErrorMessageMap[ErrorCode.SUCCESS]);
  }
}