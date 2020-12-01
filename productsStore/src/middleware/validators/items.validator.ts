import { HttpStatusCode } from "../../models/http-status-code.model";
import { RouteHandler } from "../../models/route-handler.model";
import { isEmpty } from "../../utils/json-helper.util";
import { HttpError } from "../../models/http-error.model";
import { IItemDto } from "../../models/dto/item.dto";
import { validateId, validateItemName } from "../../utils/validations.util";


export const validateIdHandler: RouteHandler = (request, response, next) => {
    const id = request.params.id;
    const errorMessage = validateId(id);

    if (errorMessage) {
        throw new HttpError(HttpStatusCode.BadRequest, `illegal id ${id} received: ${errorMessage}`);
    }
    next();
};

export const validateItemNameHandler: RouteHandler = (request, response, next) => {
    const payloadItem: IItemDto = response.locals.payloadItem;
    const errorMessage = validateItemName(payloadItem.name);

    if (errorMessage) {
        throw new HttpError(HttpStatusCode.BadRequest, `illegal item name '${payloadItem.name}' received: ${errorMessage}`);
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
