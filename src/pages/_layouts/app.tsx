import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className='h-screen grid bg-background text-foreground'>
      <Header />
      <div className='p-10'>
        <Outlet />
      </div>
    </div>
  )
}