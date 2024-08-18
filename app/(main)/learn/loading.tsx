import { Loader } from 'lucide-react'
import React from 'react'

export default function Loading() {
  return (
    <div className='h-full w-full flex justify-center items-center'>
        <Loader className='h-6 w-6 text-muted-foreground animate-spin'/>
    </div>
  )
}
