import winston from 'winston';
import { createLoggerConfig } from './logger-settings.util';

export const createLogger = (name: string) => {
  const loggerConfig = createLoggerConfig();

  const logger = winston.createLogger({
    transports: loggerConfig.transports,
    format: loggerConfig.format,
    defaultMeta: {
      name,
    },
  });

  return logger;
};
