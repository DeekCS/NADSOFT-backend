import { Request, Response, NextFunction } from 'express'

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' })
  }

  // Extract the base64 encoded credentials from the Authorization header
  const encodedCredentials = authHeader.split(' ')[1]
  const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString(
    'utf-8',
  )
  const [username, password] = decodedCredentials.split(':')

  if (username === 'admin' && password === 'password') {
    // Authentication successful
    next()
  } else {
    return res.status(401).json({ message: 'Invalid username or password' })
  }
}

export default authenticate

// Authorization
// Basic YWRtaW46cGFzc3dvcmQ=
// The string after Basic is the base64 encoded string of admin:password
