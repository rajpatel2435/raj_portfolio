import  Router  from 'next/router'
import React from 'react'

function cNavbar() {
  return (
 
    <div className='flex   bg-transparent justify-between ml-14  text-2xl  text-white fixed top-0 right-0 left-0 z-10 '>
    
      
    <div className='mt-10 cursor-pointer font-bold hover:text-green-600' onClick={()=> Router.push('./')} >
        Raj Patel
      </div>

      <div className='mt-10 mr-14 cursor-pointer font-bold  text-white text-2xl hover:text-green-600' onClick={()=> Router.back()}>
      Cancel
      </div>


</div>
  )
}

export default cNavbar