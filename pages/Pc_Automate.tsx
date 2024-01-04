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
      <div className='text-4xl flex min-h-[80vh] font-extrabold   bg-black text-white md:text-8xl justify-center items-center'>
       
   
        PC_Automate <div className='hover:scale-125'> 💻</div></div>
    <div className=''>
<h1 className='text-xl font-bold p-5 md:w-[710px] bg-black text-white md:text-6xl md:ml-auto md:mr-auto mt-10 '>Build your own 🖥️</h1>

<div className=' md:flex md:justify-center md:flex-col md:items-center '>
  <div className=' md:ml-16 border-b-4  border-gray-500 w-[800px] mt-5'>
  

    <div className='ml-4 text-2xl mb-6'>ROLE <div className=' md:-mt-8 md:ml-44 lg:ml-96'>Designer, Developer </div> </div>
  </div>
  <div className='md:ml-16 border-b-4  border-gray-500 w-[800px]  mt-5'>
  

  <div className='ml-[17px] text-2xl mb-6'>TECHNOLOGY <div className=' md:-mt-8 md:ml-44 lg:ml-[382px]'>PHP, CSS, HTML, JS, SQL</div> </div>
</div>
<div className=' md:ml-16 border-b-4  border-gray-500 w-[800px] mt-5 '>
  

  <div className='ml-[18px] text-2xl mb-6'>YEAR<div className='md:-mt-8 md:ml-44 lg:ml-[380px]'>2021 </div> </div>
</div>

<div className='md:ml-16 border-b-4  border-gray-500 w-[800px] mt-5 '>
  

  <div className='ml-[18px] text-2xl mb-6'>VIEW<div className=' md:-mt-8 md:ml-44 lg:ml-[380px] hover:text-pink-700'><a href="https://github.com/rajpatel2435/Pc_Automate" >Pc Automate</a>
   </div>
    </div>
    </div>


<div className='mt-12 md:mr-36 lg:ml-16 mr-6'>
<Image src={pcAutomate} alt='PCAutomate' className='ml-10 mt-12 hover:scale-105'/>
</div>


<div className='ml-14 mt-10 mr-10 md:mr-40 font-sans text-xl bg-black text-white p-10'>
<div className='text-xl  '>
  Building your own PC and need thoughts 🤔 on where to get everything rolling? Investigate our 
   construct <br/> guides 
  which cover a variety of system products and are in your budget. We also provide 🖥️ <br/> which are completely customized by our skilled engineers according to the user&apos;s needs. Here are the key  features of the website.
  <br/>
  <div className='ml-10 mt-2'>
-Wide varieties of computer parts available in the website <br/>
-Make your own  PC templates and share it with your friends. <br/>
-A shop for 🎧, Keyboards(⌨️) etc… <br/>
-Build guides available (suggestions about latest technology and parts available in the market)  <br/>
-You can get discounts  if you are a custom builder.<br/>
</div>

  </div>

 </div>
<div className='mt-12 md:mr-36 lg:ml-16'>
<Image src={pc3} alt='PCAutomate'  height="600px"  width="900px" className='ml-10 mt-12 hover:scale-105'/>
</div>
<div className='mt-12 md:mr-36 lg:ml-16 mr-6'>
<Image src={pc4} alt='PCAutomate'  height="600px"  width="900px" className='ml-10 mt-12 hover:scale-105'/>
</div>
</div>
<div className='mt-10 text-2xl md:ml-52 mr-10  md:mr-36 p-10 text-white bg-green-500   rounded-md'>
<div>
  Our project is PC Automate. This site is based on an useful idea in a way in which users will be able  to find and buy customized computer of their choices much easier as compared to other tools on the internet, even though there are numerous number of websites which help users to get customized machines of their choices but after analyzing we found that they hardly upload or add new products. Which is not the case on our site. In this website we basically have 3 modules. The first module contains the admin module, the second module contains the builder&apos;s module who will be responsible to customize the parts and last but not least the third module contains the user&apos;s point of view. Who will login as a client and will be able to find the products of their needs.
  </div>
</div>
<div className='flex justify-center mt-10 '>
<Image src={pc5} alt='datingImage'  className='  hover:scale-105'/>
</div>
 </div></div>
  )
}

export default Pc_Automate