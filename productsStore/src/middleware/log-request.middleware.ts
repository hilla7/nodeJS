import * as logger from '../utils/logger.util';
import { RouteHandler } from '../models/route-handler.model';

export function logRequest(): RouteHandler {
  return (request, response, next) => {
    const url = request.url;
    logger.log(`[New request received] ${url}`);

    response.on('finish', () => logger.log(`[Request finished] ${url}`));

    next();
  }
}
