import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { SignIn } from './pages/auth/sign-in'
import { ResetPassword } from './pages/auth/reset-password'
import { DashboardManager } from './pages/app/dashboard-manager/dashboard/dashboard'
import { Condominium } from './pages/app/dashboard-manager/condominium/condominium'
import { Users } from './pages/app/dashboard-manager/users/users'
import { InfoCondominium } from './pages/app/dashboard-manager/condominium/info-condominium'


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