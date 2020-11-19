import { NextFunction, Request, Response } from 'express';

export type ErrorHandler = (error: Error, request: Request, response: Response, next: NextFunction) => void;
