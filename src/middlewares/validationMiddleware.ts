import { Request, Response, NextFunction } from 'express'
import { validationResult, ValidationError } from 'express-validator'

const validateInput = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    const validationErrors: ValidationError[] = errors.array()
    console.error('Validation Errors:', validationErrors)
    return res.status(400).json({ errors: validationErrors })
  }

  next()
}

export default validateInput
