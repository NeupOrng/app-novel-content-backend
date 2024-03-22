import { ErrorCode } from "./enums/error-code.enum";

export const ErrorMessageMap: Record<ErrorCode, string> = {
    [ErrorCode.SUCCESS]: 'Success',
    [ErrorCode.BAD_REQUEST]: 'Bad request',
    [ErrorCode.UNAUTHORIZED]: 'Unauthorized',
    [ErrorCode.FORBIDDEN]: 'Forbidden',
    [ErrorCode.NOT_FOUND]: 'Not found',
    [ErrorCode.INTERNAL_SERVER_ERROR]: 'Internal server error',
};