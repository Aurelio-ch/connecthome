import { AuthLayout } from "@/pages/_layouts/auth";
import { ResetPassword } from "@/pages/auth/reset-password";
import { SignIn } from "@/pages/auth/sign-in";
import { Navigate } from "react-router-dom";

export function publicRoutes() {
    return {
        element: <AuthLayout />,
        children: [
            {
              path: '/sign-in',
              element: <SignIn />,
            },
            {
              path: '/reset-password',
              element: <ResetPassword />,
            },
            {
                path: '*',
                element: <Navigate to="/sign-in"/>,
            },
            {
                path: '/',
                element: <Navigate to="/sign-in"/>,
            },
          ]
      }
}