import { Router } from "express";
import { createNewProductHandler, updateProductHandler, deleteProductHandler, getProductsHandler } from "../handlers/products.handler";
import { validateProductIdHandler, resolveProductHandler, validateReceivedProductHandler } from "../validators/products.validator";
import { HttpStatusCode } from "../models/http-status-code.model";

const productsRouter = Router();

productsRouter.get('/', getProductsHandler, (request, response) => {
  response.send(response.locals.products);
});


productsRouter.get('/:id', validateProductIdHandler, getProductsHandler, resolveProductHandler, (request, response) => {
  response.send(response.locals.product);
});

productsRouter.post('/', validateReceivedProductHandler, getProductsHandler, createNewProductHandler, (request, response) => {
  response.status(HttpStatusCode.Created).send(response.locals.product);
});

productsRouter.put('/:id', validateProductIdHandler, validateReceivedProductHandler, getProductsHandler, resolveProductHandler, updateProductHandler, (request, response) => {
  response.send(response.locals.product);
});

productsRouter.delete('/:id', validateProductIdHandler, getProductsHandler, resolveProductHandler, deleteProductHandler, (request, response) => {
  response.sendStatus(HttpStatusCode.NoContent);
});

export { productsRouter };
