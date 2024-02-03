import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './src/routes/userRoutes'
import {
  setDefaultStatus,
  handleErrors,
} from './src/middlewares/statusMiddleware'
import swaggerUI from 'swagger-ui-express'
import { requestLogger } from './src/middlewares/requestLogger'
import swaggerJSDoc from 'swagger-jsdoc'
import { userSchema } from './src/models/userSchema'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Nadsoft Library API',
    version: '1.0.0',
    description: 'A simple Express Library API',
  },
}

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts', './src/models/userSchema.ts'], // Corrected path to the API docs
  components: {
    schemas: userSchema,
  },
}

const swaggerSpec = swaggerJSDoc(options)

// Middleware to set default status for all responses
app.use(setDefaultStatus)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

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
