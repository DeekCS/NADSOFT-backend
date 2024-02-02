import { getAllUsers, getUserById } from '../controllers/userController'
import { Router } from 'express'
const router = Router()

router.get('/users', getAllUsers)

router.get('/users/:id', getUserById)

export default router
