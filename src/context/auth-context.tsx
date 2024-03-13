/* eslint-disable react-refresh/only-export-components */
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { ReactNode, createContext, useContext, useEffect } from "react";

export interface User {
  role: string;
  Issuer: string;
  Username: string;
  exp: number;
  iat: number;
}

interface AuthContextType {
  getAuth: () => User | null
}

const AuthContext = createContext({} as AuthContextType);
export let authChannel : BroadcastChannel
export function AuthProvider({ children }: { children: ReactNode }) {

  useEffect(() => {
    authChannel = new BroadcastChannel('auth')

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case 'signOut':
          window.location.reload()
          authChannel.close()
          break;
          case 'signIn':
            window.location.reload()
            authChannel.close()
            break;
        default:
          break;
      }
    }
  }, [])

  function getAuth(): User | null {
    const token = Cookies.get("admin");

    if (!token) {
      return null;
    }
    const user: User = jwtDecode(token);
    return user;
  }

  return <AuthContext.Provider value={{getAuth}}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
