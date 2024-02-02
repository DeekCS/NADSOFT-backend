import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
} from '../controllers/userController'
import { Router } from 'express'
import validateInput from '../middlewares/validationMiddleware'
import { userValidationRules } from '../middlewares/validationRules'

const router = Router()

router.get('/users', getAllUsers)

router.get('/users/:id', getUserById)

router.post('/users', userValidationRules, validateInput, createUser)

router.put('/users/:id', userValidationRules, validateInput, updateUser)

export default router
