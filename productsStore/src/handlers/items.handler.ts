import { RouteHandler } from "../models/route-handler.model";
import { generateId } from "../utils/id-generator.util";
import { IItemDto } from "../models/dto/item.dto";
import { HttpError } from "../models/http-error.model";
import { HttpStatusCode } from "../models/http-status-code.model";
import { createLogger } from "../utils/logger/logger.util";

const logger = createLogger('Items');

export const createNewItemHandler: RouteHandler =(request, response, next) => {
    const items = response.locals.items;
    const item = response.locals.payloadItem;
    item.id = generateId();
    items.push(item);
    response.locals.item = item;
    logger.info(`item ${item.id} created successfully!`);
    next();
}

export const updateItemHandler: RouteHandler = (request, response, next) => {
    const foundItem = response.locals.item; 
    const updatedItem = response.locals.payloadItem; 
    Object.assign(foundItem, updatedItem);
    logger.info(`item ${foundItem.id} updated successfully!`);
    next();
}

export const deleteItemHandler: RouteHandler = (request, response, next) => {
    const foundItemId: number = response.locals.itemIndex;
    const items = response.locals.items;
    items.splice(foundItemId, 1);
    logger.info(`item ${foundItemId} deleted successfully!`);
    next();
}

export const resolveItemHandler: RouteHandler = (request, response, next) => {
    const items: IItemDto[] = response.locals.items;
    const itemId = request.params.id;

    const foundItemIndex = items.findIndex((item) => item.id === itemId);
    if (foundItemIndex < 0) {
        throw new HttpError(HttpStatusCode.NotFound, `item id ${itemId} not found!`);
    }
    response.locals.itemIndex = foundItemIndex;
    response.locals.item = items[foundItemIndex];
    next();
};
