import Link from 'next/link'
import React from 'react'
import About_info from './About_info'

function About() {
  return (
    <div className='flex justify-center items-center text-8xl bg-gradient-to-r from-[#1AA37A] to-[#9DFFB3]   min-h-screen text-white font-extrabold overflow-hidden raj hover: '>
        <div className=''>
            <Link ref={About_info}  href={'About_info'} className='transition ease-in-out delay-150'>
            <a>About</a>
            </Link>
        
        </div>
        </div>
       
  
  )
}

export default About