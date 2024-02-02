import { Request, Response, NextFunction } from 'express' // Import Request here
import db from '../db.server'
import { UserDTO } from '../models/UserDTO'
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
    res.json(user)
  } catch (error) {
    next(error)
  }
}

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData: UserDTO = req.body
    const user = await db.users.create({
      data: userData,
    })
    res.status(201).json(user)
  } catch (error) {
    next(error)
  }
}

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const userData: UserDTO = req.body
    const user = await db.users.update({
      where: {
        id,
      },
      data: userData,
    })
    res.json(user)
  } catch (error) {
    next(error)
  }
}

export { getAllUsers, getUserById, createUser, updateUser }
