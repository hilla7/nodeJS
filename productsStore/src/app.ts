import express from 'express';
import cors from 'cors';
import { productsRouter } from './routers/products.router';
import { clientErrorHandler, errorHandler, customHttpErrorHandler } from './middleware/errors.middleware';
import { categoriesRouter } from './routers/categories.router';
import { traceLogger, errorLogger } from './middleware/logger.middleware';

const app = express();

app.use(express.json());
app.use(cors());
app.use(traceLogger());

app.use('/api/products', productsRouter);
app.use('/api/categories', categoriesRouter);

app.use(errorLogger());
app.use(customHttpErrorHandler);
app.use(clientErrorHandler);
app.use(errorHandler);

export { app };
