import { RouteHandler } from "../models/route-handler.model";
import { HttpError } from "../models/http-error.model";
import { HttpStatusCode } from "../models/http-status-code.model";

export function wrapAsyncAndSend(asyncRouteHandler: RouteHandler<Promise<unknown>>): RouteHandler {
    return async (request, response, next) => {
        if (!response) throw new HttpError(HttpStatusCode.InternalServerError, 'empty response');
        try {
            const result = await asyncRouteHandler(request, response, next);
            response.send(result);
        } catch (error) {
            next(error);
        }
    };
}