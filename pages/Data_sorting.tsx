import React from 'react'
import dataSorting from './Images/data_srt.png'
import Image from 'next/image'
import Navbar from './Navbar'

function Data_sorting() {
  return (
    <div className=' overflow-hidden'>
      <Navbar/>
                        <div className='text-4xl flex min-h-[80vh] font-extrabold  bg-gradient-to-r ds text-white md:text-8xl justify-center items-center'>Data Sorting <span className='hover:scale-125'> 📊️ </span> </div>
         <div>   
    <div>
<h1 className='ml-10 font-bold p-5 md:w-[410px] bg-green-500 text-white text-6xl md:ml-[440px] mt-14'>Data Sorting </h1>

<div className=' lg:ml-40 md:ml-24  mt-14 ml-10'>
  <div className=' md:ml-16 border-b-4  border-gray-500 w-[900px] mt-5'>
  

    <p className='ml-4 text-2xl mb-6'>ROLE <span className='ml-32 md:ml-44 lg:ml-96'>Designer, Developer </span> </p>
  </div>
  <div className='md:ml-16 border-b-4  border-gray-500 w-[900px]  mt-5'>
  

  <p className='ml-[16px] text-2xl mb-6'>TECHNOLOGY <span className='ml-8 md:ml-20 lg:ml-[290px]'>PHP,CSS,HTML,JS,SQL</span> </p>
</div>
<div className=' md:ml-16 border-b-4  border-gray-500 w-[900px] mt-5 '>
  

  <p className='ml-[18px] text-2xl mb-6'>YEAR<span className='ml-32  md:ml-44 lg:ml-[390px]'>2020 </span> </p>
</div>
<div className='md:ml-16 border-b-4  border-gray-500 w-[900px] mt-5 '>
  

  <p className='ml-[18px] text-2xl mb-6'>VIEW<span className='ml-32 md:ml-44 lg:ml-[389px]'><a href="https://github.com/rajpatel2435/Data_sorting" >Data_sorting</a> </span> </p></div>

<div className='mt-10 text-2xl mr-10 ml-0 md:mr-36 p-10 text-white bg-black'>
<p>
- A code to sort the given database according to the name, code, release date, description, discontinued , inventory count and price
</p>
</div>

<div className='mt-10 text-2xl mr-10 ml-0 md:mr-36 p-10 text-white bg-black'>
  <h1 className=' p-2 border-b-4 border-green-500 '>Instruction</h1>
<p className='mt-4'>
- You will see the data first in no specific order when opened but then on clicking the headers you will sort the table accordingly. <br/>
- Only one table will be sorted at a time. <br/>
- Each header can be clicked to specify the order & the order is reversed by clicking again on the same header. <br/>
- An arrow is shown near the header when the table is sorted ascending or descending <br/>
</p>
</div>
<div className='mt-12 md:ml-16 mr-6'>
<Image src={dataSorting} alt='ds'  height="600px"  width="900px" className='ml-60 mt-12 hover:scale-105'/>
</div>
</div>
 </div></div>
    </div>

  )
}

export default Data_sorting
