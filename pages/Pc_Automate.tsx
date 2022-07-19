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
       
   
        PC_Automate <span className='hover:scale-125'> 💻</span></div>
    <div>
<h1 className='text-4xl ml-20 md:text-6xl md:ml-[400px] mt-14'>Build your own Pc</h1>

<div className=' mt-14 md:ml-40 ml-6'>
<div className=' md:ml-16 border-b-4  border-gray-500 w-[900px] mt-5'>


<p className='ml-4 text-2xl mb-6'>ROLE <span className='md:ml-96 ml-28'>Designer, Developer </span> </p>
</div>
<div className=' md:ml-16 border-b-4  border-gray-500 w-[900px]  mt-5'>
  

<p className='ml-2 text-2xl mb-6'>TECHNOLOGY <span className='ml-[107px] md:ml-[295px]'>PHP, CSS, HTML, JS, SQL</span> </p>
</div>
<div className=' md:ml-16 border-b-4  border-gray-500 w-[900px] mt-5 '>


<p className='ml-4 text-2xl mb-6'>YEAR<span className='ml-36 md:ml-[388px]'>2020 </span> </p>
</div>

<div className=' md:ml-16 border-b-4  border-gray-500 w-[900px] mt-5 '>


<p className='ml-4 text-2xl mb-6'>VIEW<span className='ml-28 md:ml-[388px]'><a href="https://github.com/rajpatel2435/Pc_Automate" >Pc Automate</a> </span> </p>
</div>
<div className='mt-12 md:ml-16 mr-6'>
<Image src={pcAutomate} alt='PCAutomate'  height="600px"  width="900px" className='ml-10 mt-12 hover:scale-105'/>
</div>
<div className='ml-14 mt-10 mr-40 font-sans text-xl'>
  <p>
  Our project is PC Automate. This site is based on an useful idea in a way in which users will be able  to find and buy customized computer of their choices much easier as compared to other tools on the internet, even though there are numerous number of websites which help users to get customized machines of their choices but after analyzing we found that they hardly upload or add new products. Which is not the case on our site. In this website we basically have 3 modules. The first module contains the admin module, the second module contains the builder’s module who will be responsible to customize the parts and last but not least the third module contains the user's point of view. Who will login as a client and will be able to find the products of their needs
  </p>
 </div>
<div className='mt-12 md:ml-16 mr-6'>
<Image src={pc3} alt='PCAutomate'  height="600px"  width="900px" className='ml-10 mt-12 hover:scale-105'/>
</div>
<div className='mt-12 md:ml-16 mr-6'>
<Image src={pc4} alt='PCAutomate'  height="600px"  width="900px" className='ml-10 mt-12 hover:scale-105'/>
</div>
</div>
<div>
<p className='text-xl ml-56 mt-10'>
  Building your own PC and need thoughts on where to get everything rolling? Investigate our 
   construct <br/> guides 
  which cover a variety of system products and are in your budget. We also provide desktops <br/> which are completely customized by our skilled engineers according to the user's needs. Here are the <br/> key  features of the website.
Wide varieties of computer parts available in the website
Make your own <br/> PC templates and share it with your friends.
A shop for Headphones, Keyboards etc…
Build guides <br/> available (suggestions about latest technology and parts available in the market) 
You can get discounts <br/> if you are a custom builder.

  </p>
</div>
<div className='flex min-h-screen mt-10'>
<Image src={pc5} alt='PCAutomate' className='ml-10 mt-12 hover:scale-110'/>
</div>
 </div></div>
  )
}

export default Pc_Automate