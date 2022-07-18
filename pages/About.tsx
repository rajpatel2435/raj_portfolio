import Link from 'next/link'
import React from 'react'
import About_info from './About_info'
import Footer from './Footer'

function About() {
  return (
    
    <div className='flex justify-center items-center text-8xl bg-gradient-to-r from-[#1AA37A] to-[#9DFFB3] transition ease-in-out delay-150  min-h-screen text-white font-extrabold overflow-hidden raj hover:scale-125'>
        <div>
            <Link ref={About_info}  href={'About_info'} className='transition ease-in-out delay-150'>
            <a>About</a>
            </Link>
        
        </div>
       
        </div>
  
       
  
  )
}

export default About