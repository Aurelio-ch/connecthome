import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode";

export interface User {
    role: string
    Issuer: string
    Username: string
    exp: number
    iat: number
  }

export function getAuth(): User {
    const token = Cookies.get('admin')

if (!token) {
    throw new Error('Unauthenticated.')
  }
  const user: User = jwtDecode(token)
  return user
}