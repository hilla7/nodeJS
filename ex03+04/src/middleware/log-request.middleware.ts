import * as logger from '../utils/logger.util';
import { RouteHandler } from '../models/route-handler.model';

export const logRequest: RouteHandler = (request, response, next) => {
    const url = request.url;
    logger.log(`[New request received] ${url}`);

    response.on('finish', () => logger.log(`[Request finished] ${url}`));

    next();
  }
