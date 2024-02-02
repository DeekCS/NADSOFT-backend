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

export { getAllUsers }
