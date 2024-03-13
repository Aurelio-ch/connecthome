import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className='h-screen grid grid-rows-app bg-background text-foreground antialiased'>
      <Header />
      <div className='md:p-10 p-7 w-full max-w-7xl space-y-6 mx-auto'>
        <Outlet />
      </div>
    </div>
  )
}