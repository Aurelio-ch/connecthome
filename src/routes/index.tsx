
import { AppLayout } from '@/pages/_layouts/app'
import { AuthLayout } from '@/pages/_layouts/auth'
import { Condominium } from '@/pages/app/manager/condominium'
import { InfoCondominium } from '@/pages/app/manager/condominium/info-condominium'
import { DashboardManager } from '@/pages/app/manager/dashboard'
import { Users } from '@/pages/app/manager/users'
import { ResetPassword } from '@/pages/auth/reset-password'
import { SignIn } from '@/pages/auth/sign-in'
import { createBrowserRouter } from 'react-router-dom'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <DashboardManager />,
      },
      {
        path: '/condominium',
        element: <Condominium />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/condominium/:condominiumId',
        element: <InfoCondominium />,
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