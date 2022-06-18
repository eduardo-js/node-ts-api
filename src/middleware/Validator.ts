import {NextFunction, Request, Response} from 'express';
import {AnyZodObject} from 'zod';
import {ValidationError} from '../error/Http';

export const Validate =
  (schema: AnyZodObject) =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        await schema.parseAsync({
          body: req.body,
          query: req.query,
          params: req.params,
        });
        return next();
      } catch (error) {
        return res.status(ValidationError.status).json(error);
      }
    };
