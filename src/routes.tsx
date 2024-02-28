import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'
import { ResetPassword } from './pages/auth/reset-password'
import { Condominium } from './pages/app/condominium'
import { Users } from './pages/app/users'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/condominium',
        element: <Condominium />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      
    ],
  },
  {
    path: '/',
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
    ],
  },
])