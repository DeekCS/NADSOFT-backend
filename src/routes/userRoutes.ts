import { getAllUsers } from '../controllers/userController'
import { Router } from 'express'
const router = Router()

router.get('/users', getAllUsers)

export default router
