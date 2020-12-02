import { RequestHandler, ErrorRequestHandler } from 'express';
import expressWinston from 'express-winston';
import { createLoggerConfig } from '../utils/logger/logger-settings.util';
import { LogLevel } from '../models/log-level.model';

export function traceLogger(): RequestHandler {
  return expressWinston.logger(createLoggerConfig());
}

export function errorLogger(): ErrorRequestHandler {
  return expressWinston.errorLogger(createLoggerConfig(LogLevel.Error));
}
