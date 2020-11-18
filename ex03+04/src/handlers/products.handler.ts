import { RouteHandler } from "../models/route-handler.model";
import { getProducts } from "../store/products.store";
import { Product } from "../models/dto/product.model";
import { Category } from "../models/dto/category.model";

export const getProductsHandler: RouteHandler = (request, response, next) => {
    response.locals.items = getProducts();
    next();
}

export const getProductsByCategoryHandler: RouteHandler = (request, response, next) => {
    const products: Product[] = response.locals.items;
    console.log('products', products)
    const category: Category = response.locals.item;
    console.log('category', category)

    response.locals.items = products.filter(product => product.categoryId === category.id);
    
    next();
}

