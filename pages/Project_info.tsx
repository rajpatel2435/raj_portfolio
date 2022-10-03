import React, { useEffect } from 'react'
import Dating_site from './Dating_site'
import Data_sorting from './Data_sorting'
import Pc_Automate from './Pc_Automate'
import { NextPage } from 'next'
import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Link from 'next/link'
import Nav from './Navbar'
import Hnavbar from './Hnavbar'


const Home: NextPage = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
 
 
      const component = document.querySelectorAll("#component");
      const container =document.querySelector("#container") as HTMLElement;
 
    gsap.to(component, {
       xPercent: -100 * (component.length-1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
   
          pin: true,
         scrub: 1,
         snap:  1/ (component.length-1),
         end: () => "+=" +container.offsetHeight,
   
       },
      
     });
   }, []);
   return (
    <div className=' overflow-x-hidden '>
<Hnavbar/>
          <div id="container" className='hover:scale-125' >
    
        <div className=" border-green-500 border-[6px] lg:text-8xl panel flex justify-center items-center text-4xl startup text-white bg-black font-bold  transition ease-in-out  hover:scale-125  " id="component">

        <Link href="https://montrealits.com/" >

    
        <a className=''> Montreal IT Services</a>
         </Link>
        </div>

        <div className=" border-green-500 border-[6px] lg:text-8xl panel flex justify-center items-center text-4xl dat text-white font-bold  transition ease-in-out  hover:scale-125  " id="component">
 
 <Link href="Dating_site" ref={Dating_site} >

 
 <a className=''> Dating site</a>
  </Link>
 </div>

        <div className=" border-yellow-500 border-[6px] lg:text-8xl panel flex justify-center dsa items-center bg-black text-green-500 text-4xl transition ease-in-out font-extrabold  hover:scale-125" id="component">
          <Link href='Data_sorting' ref={Data_sorting} >
          <a className='hover:'>Data_Sorting</a>
        </Link>
        </div>
        <div  className=" pc_A lg:text-8xl panel flex justify-center items-center text-4xl pcA transition ease-in-out  hover:scale-125" id="component">
          <Link href='Pc_Automate' ref={Pc_Automate} >
            <a>PC_Automate</a>
          </Link>
        </div>   
       </div>

       </div>
     
  
   );
 };
 
 export default Home;
 