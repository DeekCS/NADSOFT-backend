import { body, ValidationChain } from 'express-validator'

export const userValidationRules: ValidationChain[] = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email'),
  body('country').notEmpty().withMessage('Country is required'),
  body('age')
    .notEmpty()
    .withMessage('Age is required')
    .isInt({ min: 18 })
    .withMessage('Age should be 18 or above'),
  body('mobile')
    .notEmpty()
    .withMessage('Invalid mobile number')
    .isNumeric()
    .withMessage('Mobile number should be numeric')
    .isLength({ min: 10, max: 10 })
    .withMessage('Mobile number should be 10 digits'),
]
