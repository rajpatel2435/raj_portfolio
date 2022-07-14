import React from 'react'
import Router from 'next/router'
function Hnavbar() {
  return (



    <div className='flex  bg-transparent justify-between ml-14  text-2xl  text-green-500 fixed top-0 right-0 left-0 z-10 '>
    
      
    <div className='mt-14 cursor-pointer' onClick={()=> Router.push('./')} >
        Raj Patel
      </div>

      <div className='mt-14 mr-14 cursor-pointer'>
       Contact
      </div>
</div>


 
  )
}



export default Hnavbar