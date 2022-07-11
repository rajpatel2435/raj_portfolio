import React from 'react'
import pcAutomate from './Images/pc_automate.png'
import Image from 'next/image'

function Pc_Automate() {
  return (
    <div>   <div className='flex min-h-[80vh] font-extrabold  bg-gradient-to-r from-[#3378FF] to-[#9442FE]  text-black text-8xl justify-center items-center'>PC_Automate <span className='hover:scale-125'> 💻</span></div>
    <div>
<h1 className='text-6xl ml-[400px] mt-14'>Build your own Pc</h1>

<div className=' mt-14 ml-40'>
<div className='m ml-16 border-b-4  border-gray-500 w-[900px] mt-5'>


<p className='ml-4 text-2xl mb-6'>ROLE <span className='ml-96'>Designer, Developer </span> </p>
</div>
<div className=' ml-16 border-b-4  border-gray-500 w-[900px]  mt-5'>


<p className='ml-2 text-2xl mb-6'>TECHNOLOGY <span className='ml-[290px]'>PHP,CSS,HTML,JS,SQL</span> </p>
</div>
<div className=' ml-16 border-b-4  border-gray-500 w-[900px] mt-5 '>


<p className='ml-4 text-2xl mb-6'>YEAR<span className='ml-96'>2020 </span> </p>
</div>

<div className=' ml-16 border-b-4  border-gray-500 w-[900px] mt-5 '>


<p className='ml-4 text-2xl mb-6'>VIEW<span className='ml-96'><a href="https://github.com/rajpatel2435/Pc_Automate" >Pc Automate</a> </span> </p>
</div>
<div className='mt-12 ml-16'>
<Image src={pcAutomate} alt='raj'  height="600px"  width="900px" className='ml-10 mt-12 hover:scale-125'/>
</div>
</div>
 </div></div>
  )
}

export default Pc_Automate