import { RouteHandler } from "../models/route-handler.model";
import { getCategories, getCategoriesAsync } from "../store/categories.store";

export const getCategoriesHandler: RouteHandler = (request, response, next) => {
    response.locals.items = getCategories();
    next();
}

export const getCategoriesAsyncHandler: RouteHandler = async (request, response, next) => {
    try {
        response.locals.items = await getCategoriesAsync();
        next();
    } catch (error) {
        next(error);
    }
}