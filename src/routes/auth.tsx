import { ResetPassword } from "@/pages/auth/reset-password";
import { SignIn } from "@/pages/auth/sign-in";

export const routerAuth =  [
    {
      path: '/sign-in',
      element: <SignIn />,
    },
    {
      path: '/reset-password',
      element: <ResetPassword />,
    },
  ]