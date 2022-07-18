import React from 'react'
import pcAutomate from './Images/pc_automate.png'
import pc2 from './Images/pc2.png'
import pc3 from './Images/pc3.png'
import pc4 from './Images/pc4.png'
import pc5 from './Images/pc5.png'
import Image from 'next/image'
import Navbar from './Navbar'



function Pc_Automate() {
  return (
    <div className=' overflow-hidden'>   
<Navbar/>
      <div className='text-4xl flex min-h-[80vh] font-extrabold pcA  bg-gradient-to-r from-[#3378FF] to-[#9442FE]  text-black md:text-8xl justify-center items-center'>
       
   
        PC_Automate <span className='hover:scale-125'> 💻</span></div>
    <div>
<h1 className='text-4xl ml-20 md:text-6xl md:ml-[400px] mt-14'>Build your own Pc</h1>

<div className=' mt-14 md:ml-40 ml-6'>
<div className=' md:ml-16 border-b-4  border-gray-500 w-[900px] mt-5'>


<p className='ml-4 text-2xl mb-6'>ROLE <span className='md:ml-96 ml-28'>Designer, Developer </span> </p>
</div>
<div className=' md:ml-16 border-b-4  border-gray-500 w-[900px]  mt-5'>
  

<p className='ml-2 text-2xl mb-6'>TECHNOLOGY <span className='ml-6 md:ml-[290px]'>PHP,CSS,HTML,JS,SQL</span> </p>
</div>
<div className=' md:ml-16 border-b-4  border-gray-500 w-[900px] mt-5 '>


<p className='ml-4 text-2xl mb-6'>YEAR<span className='ml-28 md:ml-96'>2020 </span> </p>
</div>

<div className=' md:ml-16 border-b-4  border-gray-500 w-[900px] mt-5 '>


<p className='ml-4 text-2xl mb-6'>VIEW<span className='ml-28 md:ml-96'><a href="https://github.com/rajpatel2435/Pc_Automate" >Pc Automate</a> </span> </p>
</div>
<div className='mt-12 md:ml-16 mr-6'>
<Image src={pcAutomate} alt='raj'  height="600px"  width="900px" className='ml-10 mt-12 hover:scale-125'/>
</div>

<div className='mt-12 md:ml-16 mr-6'>
<Image src={pc3} alt='raj'  height="600px"  width="900px" className='ml-10 mt-12 hover:scale-125'/>
</div>

<div className='mt-12 md:ml-16 mr-6'>
<Image src={pc4} alt='raj'  height="600px"  width="900px" className='ml-10 mt-12 hover:scale-125'/>
</div>


</div>
<div className='flex min-h-screen mt-10'>
<Image src={pc5} alt='raj' className='ml-10 mt-12 hover:scale-110'/>
</div>
 </div></div>
  )
}

export default Pc_Automate