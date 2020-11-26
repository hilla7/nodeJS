import { ErrorHandler } from "../models/error-handler.model";
import * as logger from '../utils/logger.util'
import { HttpError } from "../models/http-error.model";
import { HttpStatusCode } from "../models/http-status-code.model";

export const logErrors: ErrorHandler = (error, request, response, next) => {
    logger.error(error.stack);
    next(error);
}

export const customHttpErrorHandler: ErrorHandler = (error, request, response, next) => {
    const httpErrorStatus: HttpStatusCode = error && (error as HttpError).status;
    if (httpErrorStatus) {
        return response.status(httpErrorStatus).send({ error: error.message });
    }
    next(error);
}

export const clientErrorHandler: ErrorHandler = (error, request, response, next) => {
    if (!request.xhr) {
        response.status(HttpStatusCode.InternalServerError).send({ error: 'Something went wrong' });
    } else {
        next(error);
    }
}

export const errorHandler: ErrorHandler = (error, request, response, next) => {
    response.status(HttpStatusCode.InternalServerError);
    response.render('error', { error: error });
}
