import { Router } from "express";
import { getProductsHandler, getProductsAsyncHandler } from "../handlers/products.handler";
import { validateIdHandler, validateReceivedPayloadHandler, validateItemNameHandler } from "../middleware/validators/items.validator";
import { HttpStatusCode } from "../models/http-status-code.model";
import { createNewItemHandler, updateItemHandler, deleteItemHandler, resolveItemHandler } from "../handlers/items.handler";

const productsRouter = Router();

productsRouter.get('/', getProductsHandler, (request, response) => {
  response.send(response.locals.items);
});

productsRouter.get('/:id', validateIdHandler, getProductsAsyncHandler, resolveItemHandler, (request, response) => {
  response.send(response.locals.item);
});

productsRouter.post('/', validateReceivedPayloadHandler, validateItemNameHandler, getProductsHandler, createNewItemHandler, (request, response) => {
  response.status(HttpStatusCode.Created).send(response.locals.item);
});

productsRouter.put('/:id', validateIdHandler, validateReceivedPayloadHandler, validateItemNameHandler, getProductsHandler, resolveItemHandler, updateItemHandler, (request, response) => {
  response.send(response.locals.item);
});

productsRouter.delete('/:id', validateIdHandler, getProductsHandler, resolveItemHandler, deleteItemHandler, (request, response) => {
  response.sendStatus(HttpStatusCode.NoContent);
});

export { productsRouter };
