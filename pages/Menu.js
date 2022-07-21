import Link from 'next/link'
import React from 'react'
import Projects from './Projects'
import Skills from './Skills'


function Menu() {
  return (
    <div className=' flex justify-end items-center mr-10 mt-10 rounded-full float-right h-16 w-90 bg-black text-white border-4 border-red-100  switch'>
        <div className='inline-flex justify-end item-center mr-0 float-right '>
            <ul className='flex-row inline-flex p-4 text-2xl justify-center items-center mr-20  '>

            
            <li className='p-5'>Home</li>
            <Link ref={Projects} href={'Projects'} >
                <a>
            <li className='p-5'>Projects </li> </a>
            </Link>

            <Link ref={Skills} href={'Skills'} >
                <a>
            <li className='p-5'>Skills </li> </a>
            </Link>
    
            <li className='p-2 -mr-10' > X </li>
            </ul>
        </div>
 
    </div>
  )
}

export default Menu