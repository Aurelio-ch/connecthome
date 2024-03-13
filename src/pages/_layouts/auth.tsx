import { ModeToggle } from '@/components/mode-toggle'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className='grid md:grid-cols-3 grid-rows-4 md:grid-rows-1 h-screen antialiased'>
      <div className="bg-[url('https://source.unsplash.com/random/1280x720/?condominium')] bg-cover  md:mb-0 brightness-75 md:col-span-2" />
      <div className="relative p-6 space-y-6 flex flex-col justify-center h-full row-span-3" >
      <div className="absolute top-4 right-4"><ModeToggle /></div>
        <Outlet />
      </div>
    </div>
  )
}