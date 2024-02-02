import express from 'express'
import dotenv from 'dotenv'

import userRoutes from './src/routes/userRoutes'
import {
  setDefaultStatus,
  handleErrors,
} from './src/middlewares/statusMiddleware'

import { requestLogger } from './src/middlewares/requestLogger'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware to set default status for all responses
app.use(setDefaultStatus)

// Middleware for logging requests
app.use(requestLogger)

// Middleware for parsing JSON requests
app.use(express.json())

// Mount the user routes under the '/users' path
app.use('/', userRoutes)

// Handle errors globally
app.use(handleErrors)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

export default app
