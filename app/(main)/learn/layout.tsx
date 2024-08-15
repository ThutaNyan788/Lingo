import MobileHeader from '@/components/mobile-header'
import Sidebar from '@/components/sidebar'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <MobileHeader />
      <Sidebar className='hidden lg:flex' />
      <main className='lg:pl-[256px]  h-full pt-[50px] lg:pt-0'>
        <div className='h-full bg-indigo-500'>
          {children}
        </div>
      </main>
    </>
  )
}
