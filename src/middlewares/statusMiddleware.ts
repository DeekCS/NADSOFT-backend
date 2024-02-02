import { Request, Response, NextFunction } from "express";

const setDefaultStatus = (req: Request, res: Response, next: NextFunction) => {
  // Using type casting to inform TypeScript about the existence of defaultStatus
  (res as any).defaultStatus = 200;
  next();
};

const handleErrors = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode =
    (res as any).statusCode !== 200 ? (res as any).statusCode : 500;
  res.status(statusCode).json({
    error: err.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
};

export { setDefaultStatus, handleErrors };
