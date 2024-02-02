import request from 'supertest'
import express, { Request, Response, NextFunction } from 'express'

const app = express()

import authanticate from '../src/middlewares/authenticate'

// Mock route using the authenticate middleware
app.get('/secure-route', authanticate, (req: Request, res: Response) => {
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
