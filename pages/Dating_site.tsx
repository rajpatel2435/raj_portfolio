import React from 'react'
import Image from 'next/image'
import datingsite from './Images/dating_site.png'
import dating1 from './Images/date4.png'
import dating2 from './Images/date5.png'
import dating3 from './Images/date6.png'
import Navbar from './Navbar'


function Dating_site() {
  return (
    <div className='overflow-hidden cursor-pointer'>
<Navbar/>
        <div className='text-4xl flex min-h-[80vh] font-extrabold dat  text-white md:text-8xl justify-center items-center'>Dating Site <span className='hover:scale-125'> ❤️️ </span></div>
        <div>
<h1 className='ml-10 font-bold p-5 md:w-[710px] bg-black text-white text-6xl md:ml-[310px] mt-14'>Find your Partner here</h1>

<div className=' lg:ml-40 md:ml-24  mt-14 ml-10'>
  <div className=' md:ml-16 border-b-4  border-gray-500 w-[900px] mt-5'>
  

    <p className='ml-4 text-2xl mb-6'>ROLE <span className='ml-32 md:ml-44 lg:ml-96'>Designer, Developer </span> </p>
  </div>
  <div className='md:ml-16 border-b-4  border-gray-500 w-[900px]  mt-5'>
  

  <p className='ml-[16px] text-2xl mb-6'>TECHNOLOGY <span className='ml-8 md:ml-20 lg:ml-[290px]'>PHP,CSS,HTML,JS,SQL</span> </p>
</div>
<div className=' md:ml-16 border-b-4  border-gray-500 w-[900px] mt-5 '>
  

  <p className='ml-[18px] text-2xl mb-6'>YEAR<span className='ml-32  md:ml-44 lg:ml-[390px]'>2021 </span> </p>
</div>

<div className='md:ml-16 border-b-4  border-gray-500 w-[900px] mt-5 '>
  

  <p className='ml-[18px] text-2xl mb-6'>VIEW<span className='ml-32 md:ml-44 lg:ml-[389px]'><a href="https://github.com/rajpatel2435/Dating_site" >Dating site</a> </span> </p>
</div>


<div className='mt-12 md:mr-36 lg:ml-16 mr-6'>
<Image src={datingsite} alt='datingsite'  height="600px"  width="900px" className='ml-10 mt-12 hover:scale-105'/>
</div>
<div className='mt-10 text-2xl mr-10 ml-0 md: lg:mr-36 p-10 text-white bg-blue-900  rounded-md cursor-default'>
<h1 className=' p-2 border-b-4 border-green-500 '>  # What the project is about?</h1>
  <p className='mt-2'>


- A <b>php</b> application like dating website with <b>database</b>. <br/>
- User can register and login to meet new people. <br/>
- After login the database is saved and the user can start interacting with people. <br/>
- There are 3 types of membership:  1) Guest
<div className='ml-36 md:ml-96'>  2)Regular  <br/> 3)Premium <br/>
</div>

- If the user is <b>guest </b> he can search a particular user if he knows the username and view his profile. <br/>
- If the user is <b>regular</b> he can update his/her profile by adding ABOUT and update the photo. <br/>
- If the user is <b>premium</b> then he can create his own favorite list and add and remove people from it. <br/>
- Moreover the premium user can chat and send <b>WINKS</b> to other people. <br/>
- Premium users will also know if someone Added him to their favorite list or removed from it. <br/>
- The chat is private and, the <i>chat color changes</i> when the other user reads your message. <br/>
- It also contains a <i>"Are you famous?"</i>  page where you can see if you are in someones favorite list. <br/>
- It also sorts the people: 
<div className='ml-10'>
1) According to <i>the age</i> <br/> 2)According to <i>the Popularity(more winks)</i> <br/>  3)According to <i>the city</i>
</div>

  </p>
</div>
<div className='mt-12  md:mr-36 lg:ml-16 mr-6'>
<Image src={dating1} alt='datingImage'   height="600px"  width="900px" className='ml-10 mt-12 md:mr-36 hover:scale-105'/>
</div>

<div className='mt-12 md:mr-36 lg:ml-16 mr-6'>
<Image src={dating2} alt='datingImage'  height="600px"  width="900px" className='ml-10 mt-12 hover:scale-105'/>
</div>

</div>
</div>
<div className='flex min-h-screen mt-10'>
<Image src={dating3} alt='datingImage'   className=''/>
</div>
     </div>

 
  )
}

export default Dating_site