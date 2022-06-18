import {NextFunction, Request, Response} from 'express';
import {UnhandledException} from '../error/Http';

export const ErrorHandler = async (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
  console.info(JSON.stringify(err));
  return res.status(UnhandledException.status).json(UnhandledException.data);
};
