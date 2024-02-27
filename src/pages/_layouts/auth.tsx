import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className='grid grid-cols-3 h-screen'>
      <div className="bg-cover -mb-7 md:mb-0 brightness-75 col-span-2" />
      <div >
        <Outlet />
      </div>
    </div>
  )
}