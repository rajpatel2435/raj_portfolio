import React from 'react'
import Image from 'next/image'
import datingsite from './Images/dating_site.png'
import dating1 from './Images/date4.png'
import dating2 from './Images/date5.png'
import dating3 from './Images/date6.png'
import Navbar from './Navbar'


function Dating_site() {
  return (
    <div className='overflow-hidden'>
<Navbar/>
        <div className='text-4xl flex min-h-[80vh] font-extrabold dat  text-white md:text-8xl justify-center items-center'>Dating Site <span className='hover:scale-125'> ❤️️ </span></div>
        <div>
<h1 className='ml-20 text-6xl md:ml-[370px] mt-14'>Find your Partner here</h1>

<div className=' md:ml-40  mt-14 ml-10'>
  <div className=' md:ml-16 border-b-4  border-gray-500 w-[900px] mt-5'>
  

    <p className='ml-4 text-2xl mb-6'>ROLE <span className='ml-28 md:ml-96'>Designer, Developer </span> </p>
  </div>
  <div className='md:ml-16 border-b-4  border-gray-500 w-[900px]  mt-5'>
  

  <p className='ml-2 text-2xl mb-6'>TECHNOLOGY <span className='ml-8 md:ml-[290px]'>PHP,CSS,HTML,JS,SQL</span> </p>
</div>
<div className=' md:ml-16 border-b-4  border-gray-500 w-[900px] mt-5 '>
  

  <p className='ml-4 text-2xl mb-6'>YEAR<span className='ml-32 md:ml-96'>2020 </span> </p>
</div>

<div className='md:ml-16 border-b-4  border-gray-500 w-[900px] mt-5 '>
  

  <p className='ml-4 text-2xl mb-6'>VIEW<span className='ml-32 md:ml-96'><a href="https://github.com/rajpatel2435/Dating_site" >Dating site</a> </span> </p>
</div>
<div className='mt-12 md:ml-16 mr-6'>
<Image src={datingsite} alt='raj'  height="600px"  width="900px" className='ml-10 mt-12 hover:scale-125'/>
</div>
<div>
  <p>In th</p>
</div>
<div className='mt-12 md:ml-16 mr-6'>
<Image src={dating1} alt='raj'  height="600px"  width="900px" className='ml-10 mt-12 hover:scale-125'/>
</div>

<div className='mt-12 md:ml-16 mr-6'>
<Image src={dating2} alt='raj'  height="600px"  width="900px" className='ml-10 mt-12 hover:scale-125'/>
</div>


</div>
<div className='flex min-h-screen mt-10'>
<Image src={dating3} alt='raj'   className=''/>
</div>
     </div>

    </div>
  )
}

export default Dating_site