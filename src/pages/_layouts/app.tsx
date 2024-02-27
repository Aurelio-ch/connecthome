import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className='h-screen grid grid-rows-app bg-background text-foreground'>
      <Header />
      <div className='md:p-10 p-7'>
        <Outlet />
      </div>
    </div>
  )
}