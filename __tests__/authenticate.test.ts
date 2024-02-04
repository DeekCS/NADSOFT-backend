import request from 'supertest'
import express, { Request, Response, NextFunction } from 'express'

const app = express()

import authenticate from '../src/middlewares/authenticate'
import { describe } from 'node:test'

// Mock route using the authenticated middleware
app.get('/secure-route', authenticate, (req: Request, res: Response) => {
  res.json({ message: 'Secure route accessed successfully' })
})

describe('authenticate middleware', () => {
  it('should return 401 if Authorization header is missing', async () => {
    await request(app)
      .get('/secure-route')
      .expect(401, { message: 'Authorization header missing' })
  })

  it('should return 401 for invalid credentials', async () => {
    await request(app)
      .get('/secure-route')
      .set(
        'Authorization',
        'Basic ' + Buffer.from('invalid:credentials').toString('base64'),
      )
      .expect(401, { message: 'Invalid username or password' })
  })

  it('should call next() for valid credentials', async () => {
    await request(app)
      .get('/secure-route')
      .set(
        'Authorization',
        'Basic ' + Buffer.from('admin:password').toString('base64'),
      )
      .expect(200, { message: 'Secure route accessed successfully' })
  })
})
