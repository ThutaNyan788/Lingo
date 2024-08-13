import { Button } from '@/components/ui/button'
import React from 'react'

export default function Home() {
  return (
    <div >
      <p className='text-green-500 font-bold text-xs'>Hello Home</p>
      <Button size="lg" variant="destructive">Click Me</Button>
    </div>
  )
}
