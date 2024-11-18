'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

const MainLayout = ({children}) => {
    const pathname = usePathname()
    // const shouldRenderChildren = !pathname.startsWith('/user/');

  return (
    <>
   {
    //  shouldRenderChildren && children
     pathname !== '/forget-password' && pathname !== '/signup' && pathname !== '/signin' && children
   }
        
    </>
  )
}

export default MainLayout