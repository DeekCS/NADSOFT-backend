import { Request, Response, NextFunction } from 'express'
import moment from 'moment'

/**
 * Middleware for logging incoming requests.
 * @param req Express Request object.
 * @param res Express Response object.
 * @param next Express NextFunction for passing control to the next middleware.
 */
const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  // Destructure relevant properties from the request object
  const { method, originalUrl, body, query, params, ip, statusCode } = req

  // Format timestamp using moment.js
  const timestamp = moment().format('YYYY-MM-DD HH:mm:ss')

  // Log request details in a structured format
  console.table({
    timestamp,
    method,
    originalUrl,
    body,
    query,
    params,
    ip,
    statusCode,
  })

  // Pass control to the next middleware
  next()
}

export { requestLogger }
