import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/userController'
import authenticate from '../middlewares/authenticate'
import validateInput from '../middlewares/validationMiddleware'
import { userValidationRules } from '../middlewares/validationRules'
import { Router } from 'express'

const router = Router()

router.get('/users', getAllUsers)

router.get('/users/:id', getUserById)

router.post('/users', userValidationRules, validateInput, createUser)

router.put('/users/:id', userValidationRules, validateInput, updateUser)

router.delete('/users/:id', authenticate, deleteUser)

export default router
