import Link from 'next/link'
import React from 'react'
import Hnavbar from './Hnavbar'

import Project_info from './Project_info'


function Projects() {
  return (
    <div className='flex min-h-screen font-extrabold bg-[#4d4dff] text-white text-8xl justify-center items-center'>
 
    <div className='hover:scale-125'>
        <Link  className='transition ease-in-out delay-150'  href={'Project_info'}>
Projects
        </Link>
  
    
    </div>
    </div>
   

    // color
    // c165dd to 5c27fe
    // 2afeb7 to 08c792
    // ffe324 to ffb533
    // ffcb52 to ff7b02
    // from-[#5581f1] to-[#1153fc]
  )
}

export default Projects