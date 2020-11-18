import { RouteHandler } from "../models/route-handler.model";
import { getCategories } from "../store/categories.store";

export const getCategoriesHandler: RouteHandler = (request, response, next) => {
    response.locals.items = getCategories();
    next();
}