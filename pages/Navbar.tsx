import React from 'react'
import Router from 'next/router'
function Navbar() {
  return (

    <div className='flex  bg-transparent justify-between ml-14  text-2xl font-bold text-green-500 fixed top-0 right-0 left-0 z-10'>
    
      <div className='mt-14 cursor-pointer' onClick={()=> Router.push('./')} >
        Raj Patel
      </div>
      <div className='mt-14 cursor-pointer' onClick={() => Router.back()}>
        Close
      </div>
      <div className='mt-14 mr-14 cursor-pointer'  onClick={()=> Router.push('./Contact')}>
       Contact
      </div>
</div>


 
  )
}

export default Navbar