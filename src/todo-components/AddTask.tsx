import { Input } from '@/components/ui/input'

import React from 'react'

export const AddTask = () => {
  return (
    <main className='flex flex-col gap-x-3 w-full gap-3'>
          <input placeholder='Task' minLength={3} maxLength={54} className='w-full px-2 py-1 rounded-md border border-gray-100 '/>
        <button className='bg-teal-800 text-white  py-1 px-2 rounded-md font-normal text-xl'>Save T</button>
    </main>
  )
}
