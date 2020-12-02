import { RequestHandler, ErrorRequestHandler } from 'express';
import expressWinston from 'express-winston';
import { createLoggerConfig } from '../utils/logger/logger-settings.util';

const loggerConfig = createLoggerConfig();

export function traceLogger(): RequestHandler {
  return expressWinston.logger(loggerConfig);
}

export function errorLogger(): ErrorRequestHandler {
  return expressWinston.errorLogger(loggerConfig);
}
