import { RouteHandler } from "../models/route-handler.model";
import { getProducts, getProductsAsync } from "../store/products.store";
import { IProductDto } from "../models/dto/product.dto";
import { ICategoryDto } from "../models/dto/category.dto";

export const getProductsHandler: RouteHandler = (request, response, next) => {
    response.locals.items = getProducts();
    next();
}

export const getProductsAsyncHandler: RouteHandler = async (request, response, next) => {
    try {
        response.locals.items = await getProductsAsync();
        next();
    } catch (error) {
        next(error);
    }
}

export const getProductsByCategoryHandler: RouteHandler = (request, response, next) => {
    const products: IProductDto[] = response.locals.items;
    const category: ICategoryDto = response.locals.item;
    response.locals.items = products.filter(product => product.categoryId === category.id);

    next();
}

