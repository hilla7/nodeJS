import express from 'express';
import cors from 'cors';
import { productsRouter } from './routers/products.router';
import { logRequest } from './middleware/log-request.middleware';
import { logErrors, clientErrorHandler, errorHandler, customHttpErrorHandler } from './middleware/errors.middleware';

const app = express();

app.use(express.json());
app.use(cors());
app.use(logRequest);

app.use('/api/products', productsRouter);

app.use(logErrors);
app.use(customHttpErrorHandler);
app.use(clientErrorHandler);
app.use(errorHandler);

export { app };
