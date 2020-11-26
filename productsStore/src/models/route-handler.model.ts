import { NextFunction, Request, Response } from 'express';

export type RouteHandler<T= void> = (request: Request, response: Response, next: NextFunction) => T;
