import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import "./About.css"




export default function Example() {

  return (
    <div id="about" className="flex h-screen flex-col items-center justify-center gap-6">
      <div className='text-center'>
        
        <p className='text-sm font-sans font-medium italic leading-6 text-gray-400 '>Dreams to Reality</p>
        <h1 className=' text-2xl font-bold tracking-tight text-stone-950 sm:text-6xl '>Hi, We are Bryan and Michael</h1>
        <h1 className='inline-block overflow-hidden whitespace-nowrap font-mono font-bold text-2xl py-2 tracking-tight text-blue-500 sm:text-6xl animate-typing border-r-2 border-black'>Full-Stack Developers</h1>
        <h1 className='text-2xl font-bold tracking-tight  text-stone-950 sm:text-6xl'>Based in Belgium.</h1>
      </div> 
      <div className='flex flex-row gap-4 items-center'>
        <button class="bg-blue-500 font-semibold transition-colors shadow-lg duration-300 ease-in-out hover:text-blue-500 px-4 border-2 border-blue-500 hover:bg-transparent rounded h-10">
        Hire us
        </button>
        <a href="#" class="text-base font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></a>
      </div>
    </div>
  )
}
