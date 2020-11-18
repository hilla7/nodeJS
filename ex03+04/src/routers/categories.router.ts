import { Router } from "express";
import { getCategoriesHandler } from "../handlers/categories.handler";
import { validateIdHandler, validateReceivedPayloadHandler } from "../validators/items.validator";
import { createNewItemHandler, updateItemHandler, deleteItemHandler, resolveItemHandler } from "../handlers/items.handler";
import { HttpStatusCode } from "../models/http-status-code.model";
import { getProductsHandler, getProductsByCategoryHandler } from "../handlers/products.handler";

const categoriesRouter = Router();

categoriesRouter.get('/', getCategoriesHandler, (request, response) => {
  console.log('response.locals.items', response.locals.items)
  response.send(response.locals.items);
});

categoriesRouter.get('/:id', validateIdHandler, getCategoriesHandler, resolveItemHandler, (request, response) => {
  response.send(response.locals.item);
});

categoriesRouter.get('/:id/products', validateIdHandler, getCategoriesHandler, resolveItemHandler, getProductsHandler, getProductsByCategoryHandler, (request, response) => {
  response.send(response.locals.items);
});

categoriesRouter.post('/', validateReceivedPayloadHandler, getCategoriesHandler, createNewItemHandler, (request, response) => {
  response.status(HttpStatusCode.Created).send(response.locals.item);
});

categoriesRouter.put('/:id', validateIdHandler, validateReceivedPayloadHandler, getCategoriesHandler, resolveItemHandler, updateItemHandler, (request, response) => {
  response.send(response.locals.item);
});

categoriesRouter.delete('/:id', validateIdHandler, getCategoriesHandler, resolveItemHandler, deleteItemHandler, (request, response) => {
  response.sendStatus(HttpStatusCode.NoContent);
});

export { categoriesRouter };
