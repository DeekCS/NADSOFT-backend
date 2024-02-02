import { Request, Response, NextFunction } from 'express'

const setDefaultStatus = (req: Request, res: Response, next: NextFunction) => {
  res.locals.defaultStatus = 200
  next()
}

const handleErrors = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500
  res.status(statusCode).json({
    error: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  })
}

export { setDefaultStatus, handleErrors }
