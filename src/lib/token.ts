import { verify } from 'jsonwebtoken'


export function verifyToken(token: string, secret: string): any {
  try {
    return verify(token, secret)
  } catch (error) {
    return null
  }
}