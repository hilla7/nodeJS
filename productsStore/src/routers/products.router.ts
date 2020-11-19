import { Router } from "express";
import { getProductsHandler } from "../handlers/products.handler";
import { validateIdHandler, validateReceivedPayloadHandler } from "../validators/items.validator";
import { HttpStatusCode } from "../models/http-status-code.model";
import { createNewItemHandler, updateItemHandler, deleteItemHandler, resolveItemHandler } from "../handlers/items.handler";

const productsRouter = Router();

productsRouter.get('/', getProductsHandler, (request, response) => {
  response.send(response.locals.items);
});

productsRouter.get('/:id', validateIdHandler, getProductsHandler, resolveItemHandler, (request, response) => {
  response.send(response.locals.item);
});

productsRouter.post('/', validateReceivedPayloadHandler, getProductsHandler, createNewItemHandler, (request, response) => {
  response.status(HttpStatusCode.Created).send(response.locals.item);
});

productsRouter.put('/:id', validateIdHandler, validateReceivedPayloadHandler, getProductsHandler, resolveItemHandler, updateItemHandler, (request, response) => {
  response.send(response.locals.item);
});

productsRouter.delete('/:id', validateIdHandler, getProductsHandler, resolveItemHandler, deleteItemHandler, (request, response) => {
  response.sendStatus(HttpStatusCode.NoContent);
});

export { productsRouter };
