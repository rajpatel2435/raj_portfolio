import React from 'react'
import Router from 'next/router'
import Footer from './Footer'
function Hnavbar() {
  return (



    <div className='flex  bg-transparent justify-between ml-14  text-2xl  text-white fixed top-0 right-0 left-0 z-10 '>
    
      
    <div className='mt-10 cursor-pointer font-bold hover:text-green-600' onClick={()=> Router.push('./')} >
        Raj Patel
      </div>

      <div className='mt-10 mr-14 cursor-pointer font-bold hover:text-green-600' onClick={()=> Router.push('./Contact')}>
       Contact
      </div>


</div>



 
  )
}



export default Hnavbar