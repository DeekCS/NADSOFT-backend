import {
  getAllUsers,
  getUserById,
  createUser,
} from '../controllers/userController'
import { Router } from 'express'
import validateInput from '../middlewares/validationMiddleware'
import { userValidationRules } from '../middlewares/validationRules'

const router = Router()

router.get('/users', getAllUsers)

router.get('/users/:id', getUserById)

router.post('/users', userValidationRules, validateInput, createUser)

export default router
