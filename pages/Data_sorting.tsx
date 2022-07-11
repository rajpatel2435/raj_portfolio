import React from 'react'
import dataSorting from './Images/data_srt.png'
import Image from 'next/image'

function Data_sorting() {
  return (
    <div>
                        <div className='flex min-h-[80vh] font-extrabold  bg-gradient-to-r from-[#3378FF] to-[#9442FE]  text-white text-8xl justify-center items-center'>Data Sorting <span className='hover:scale-125'> 📊️ </span> </div>
         <div>   
    <div>
<h1 className='text-6xl ml-[500px] mt-14'>Data Sorting </h1>

<div className=' mt-14 ml-40'>
<div className=' ml-16 border-b-4  border-gray-500 w-[900px] mt-5'>


<p className='ml-4 text-2xl mb-6'>ROLE <span className='ml-96'>Designer, Developer </span> </p>
</div>
<div className=' ml-16 border-b-4  border-gray-500 w-[900px]  mt-5'>


<p className='ml-2 text-2xl mb-6'>TECHNOLOGY <span className='ml-[290px]'>PHP,CSS,HTML,JS,SQL</span> </p>
</div>
<div className=' ml-16 border-b-4  border-gray-500 w-[900px] mt-5 '>


<p className='ml-4 text-2xl mb-6'>YEAR<span className='ml-96'>2021 </span> </p>
</div>

<div className='ml-16 border-b-4  border-gray-500 w-[900px] mt-5 '>


<p className='ml-4 text-2xl mb-6'>VIEW<span className='ml-96'><a href="https://github.com/rajpatel2435/Data_sorting" >Data_sorting</a> </span> </p>
</div>
<div className='mt-12 ml-16'>
<Image src={dataSorting} alt='raj'  height="600px"  width="900px" className='ml-60 mt-12 hover:scale-125'/>
</div>
</div>
 </div></div>
    </div>

  )
}

export default Data_sorting
