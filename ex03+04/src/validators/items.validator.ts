import { HttpStatusCode } from "../models/http-status-code.model";
import { RouteHandler } from "../models/route-handler.model";
import { isEmpty } from "../utils/json-helper.util";
import { HttpError } from "../models/http-error.model";

const validIdLength: number = 36;

export const validateIdHandler: RouteHandler = (request, response, next) => {
    const id = request.params.id;

    if (!id || id.length !== validIdLength) {
        throw new HttpError(HttpStatusCode.BadRequest, `illegal id ${id} received`);
    }
    next();
};

export const validateReceivedPayloadHandler: RouteHandler = (request, response, next) => {
    const payloadItem = request.body;
    if (!payloadItem || isEmpty(payloadItem)) {
        throw new HttpError(HttpStatusCode.BadRequest, `no payload item provided`);
    }
    response.locals.payloadItem = payloadItem;
    next();
};
