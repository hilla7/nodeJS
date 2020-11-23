import { RouteHandler } from "../models/route-handler.model";
import { getProducts } from "../store/products.store";
import { IProductDto } from "../models/dto/product.dto";
import { ICategoryDto } from "../models/dto/category.dto";

export const getProductsHandler: RouteHandler = (request, response, next) => {
    response.locals.items = getProducts();
    next();
}

export const getProductsByCategoryHandler: RouteHandler = (request, response, next) => {
    const products: IProductDto[] = response.locals.items;
    console.log('products', products)
    const category: ICategoryDto = response.locals.item;
    console.log('category', category)

    response.locals.items = products.filter(product => product.categoryId === category.id);
    
    next();
}

