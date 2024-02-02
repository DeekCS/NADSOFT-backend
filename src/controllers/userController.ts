import { Request, Response, NextFunction } from 'express' // Import Request here
import db from '../db.server'

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await db.users.findMany()
    res.json(users)
  } catch (error) {
    next(error)
  }
}

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const user = await db.users.findUnique({
      where: {
        id,
      },
    })
    if (!user) {
      throw new Error('User not found')
    }
  } catch (error) {
    next(error)
  }
}

export { getAllUsers, getUserById }
