import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Example() {

    return (
      <div id="aboutUs" className="flex flex-col  p-6 h-screen">
        <div id="section1" className='flex flew-row justify-between items-center bg-blue-950 rounded-lg m-4 pl-8 pr-8 h-96 overflow-hidden'>
            <p >Text Area</p>
            <div>
                <img src='./assets/images/Michel.png' className='max-w-sm'></img>
            </div>
        </div>
        <div id='section2' className='flex flew-row justify-between items-center bg-blue-950 rounded-lg  m-4 pl-8 pr-8 h-96 overflow-hidden'>
        <p>Text Area</p>
        <img src='./assets/images/Bryan.png' className='max-w-sm'></img>
        </div>
      </div>
    )
  }