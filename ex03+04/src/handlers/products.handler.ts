import { RouteHandler } from "../models/route-handler.model";
import { getProducts } from "../store/products.store";
import { generateId } from "../utils/id-generator.util";
import { Product } from "../models/product.model";
import * as logger from "../utils/logger.util";

export const createNewProductHandler: RouteHandler = (request, response, next) => {
    const products: Product[] = response.locals.products;
    const product: Product = response.locals.product;
    product.id = generateId();
    products.push(product);
    logger.log(`product ${product.id} created successfully!`);
    next();
}

export const updateProductHandler: RouteHandler = (request, response, next) => {
    const foundProduct: Product = response.locals.product;
    const updatedProduct: Product = response.locals.product;
    Object.assign(foundProduct, updatedProduct);
    logger.log(`product ${foundProduct.id} updated successfully!`);
    next();
}

export const deleteProductHandler: RouteHandler = (request, response, next) => {
    const foundProductId: number = response.locals.foundProductId;
    const products: Product[] = response.locals.products;
    products.splice(foundProductId, 1);
    logger.log(`product ${foundProductId} deleted successfully!`);
    next();
}

export const getProductsHandler: RouteHandler = (request, response, next) => {
    response.locals.products = getProducts();
    next();
}