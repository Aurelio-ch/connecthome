/* eslint-disable react-refresh/only-export-components */
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { ReactNode, createContext, useContext } from "react";

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

export function AuthProvider({ children }: { children: ReactNode }) {
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
