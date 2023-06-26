import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'



export default function Example() {

  return (
    <div className="flex bg-zinc-100 h-screen flex-row items-center justify-around">
      <div className=''>
        <p className='text-sm font-semibold leading-6 text-gray-400'>Dreams To Reality</p>
        <h1 className='text-2xl font-bold tracking-tight text-stone-950 sm:text-6xl'>Hi, We are Bryan and Michael</h1>
        <h1 className='text-2xl font-bold tracking-tight text-blue-500 sm:text-6xl'>Full-Stack Developers</h1>
        <h1 className='text-2xl font-bold tracking-tight  text-stone-950 sm:text-6xl'>Based In Belgium.</h1>
        <button class="bg-transparent hover:bg-blue-500 text-stone-950 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Button
        </button>
        <button></button>
      </div> 
    </div>
  )
}
