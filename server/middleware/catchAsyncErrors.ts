import { Request, Response, NextFunction } from "express";

export const CatchAsyncErrore =
  (theFunc: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(theFunc(req, res, next)).catch(next);
  };
