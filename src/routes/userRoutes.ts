import { Router } from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/userController';
import authenticate from '../middlewares/authenticate';
import validateInput from '../middlewares/validationMiddleware';
import { userValidationRules } from '../middlewares/validationRules';

const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get a list of users
 *     description: Returns a list of users.
 *     responses:
 *       200:
 *         description: A list of users.
 */
router.get('/users', getAllUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: Returns a user by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user to return.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A user.
 */
router.get('/users/:id', getUserById);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     description: Creates a new user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: A user.
 */
router.post('/users', userValidationRules, validateInput, createUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     description: Updates a user by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: A user.
 */
router.put('/users/:id', userValidationRules, validateInput, updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     description: Deletes a user by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: No content.
 */
router.delete('/users/:id', authenticate, deleteUser);

export default router;
