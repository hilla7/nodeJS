import { HttpStatusCode } from "../models/http-status-code.model";
import { RouteHandler } from "../models/route-handler.model";
import { isEmpty } from "../utils/json-helper.util";
import { Product } from "../models/product.model";
import { HttpError } from "../models/http-error.model";

const validProductIdLength: number = 36;

export const resolveProductHandler: RouteHandler = (request, response, next) => {
    const products: Product[] = response.locals.products;
    const productId = request.params.id;

    const foundProductId = products.findIndex((product) => product.id === productId);
    if (foundProductId < 0) {
        throw new HttpError(HttpStatusCode.NotFound, `product id ${productId} not found!`);
    }
    response.locals.productIndex = foundProductId;
    response.locals.product = products[foundProductId];
    next();
};

export const validateProductIdHandler: RouteHandler = (request, response, next) => {
    const productId = request.params.id;

    if (!productId || productId.length !== validProductIdLength) {
        throw new HttpError(HttpStatusCode.BadRequest, `illegal product id ${productId} received`);
    }
    next();
};

export const validateReceivedProductHandler: RouteHandler = (request, response, next) => {
    const product = request.body as Product;
    if (!product || isEmpty(product)) {
        throw new HttpError(HttpStatusCode.BadRequest, `no product provided`);
    }
    response.locals.product = product;
    next();
};
