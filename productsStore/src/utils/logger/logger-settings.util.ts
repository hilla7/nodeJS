import winston from 'winston';
import { TransformableInfo } from 'logform';

export function createLoggerConfig() {
  return {
    transports: [
      new winston.transports.Console(),
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp(),
      winston.format.align(),
      winston.format.printf(info => {
        return createLogTemplate(info);
      }
      ))
  }
}

function createLogTemplate(info: TransformableInfo): string {
  const {
    timestamp, level, message, meta, name
  } = info;

  const messageName = name ||  'ProductsApp';
  const formattedTs = formatTimestamp(timestamp);
  const template = `${formattedTs} [${level}] [${messageName}]: ${message} ${meta && meta.message ? meta.message + '\n' : ''}`;
  return template;
}

function formatTimestamp(timestamp: any): string {
  return timestamp.slice(0, 19).replace('T', ' ')
}
