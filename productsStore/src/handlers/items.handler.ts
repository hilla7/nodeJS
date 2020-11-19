import { RouteHandler } from "../models/route-handler.model";
import { generateId } from "../utils/id-generator.util";
import * as logger from "../utils/logger.util";
import { Item } from "../models/dto/item.model";
import { HttpError } from "../models/http-error.model";
import { HttpStatusCode } from "../models/http-status-code.model";

export const createNewItemHandler: RouteHandler =(request, response, next) => {
    const items = response.locals.items;
    const item = response.locals.payloadItem;
    item.id = generateId();
    items.push(item);
    response.locals.item = item;
    logger.log(`item ${item.id} created successfully!`);
    next();
}

export const updateItemHandler: RouteHandler = (request, response, next) => {
    const foundItem = response.locals.item; 
    const updatedItem = response.locals.payloadItem; 
    Object.assign(foundItem, updatedItem);
    logger.log(`item ${foundItem.id} updated successfully!`);
    next();
}

export const deleteItemHandler: RouteHandler = (request, response, next) => {
    const foundItemId: number = response.locals.itemIndex;
    const items = response.locals.items;
    items.splice(foundItemId, 1);
    logger.log(`item ${foundItemId} deleted successfully!`);
    next();
}

export const resolveItemHandler: RouteHandler = (request, response, next) => {
    const items: Item[] = response.locals.items;
    const itemId = request.params.id;

    const foundItemIndex = items.findIndex((item) => item.id === itemId);
    if (foundItemIndex < 0) {
        throw new HttpError(HttpStatusCode.NotFound, `item id ${itemId} not found!`);
    }
    response.locals.itemIndex = foundItemIndex;
    response.locals.item = items[foundItemIndex];
    next();
};
