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
         snap: 1 / (component.length-1),
         end: () => "+=" +container.offsetWidth,
       },
     });
   }, []);
   return (
    <div className=' overflow-x-hidden'>
<Hnavbar/>
          <div id="container" >
        <div className=" lg:text-8xl panel flex justify-center items-center bg-black text-4xl text-white" id="component">
 
        <Link href="Dating_site" ref={Dating_site}>

        
        <a> Dating site</a>
         </Link>
        </div>
        <div className="lg:text-8xl panel flex justify-center items-center bg-gradient-to-r from-[#FFE53b] to-[#FF2525] text-4xl" id="component">
          <Link href='Data_sorting' ref={Data_sorting}>
          <a>Data_Sorting</a>
        </Link>
        </div>
        <div  className=" pc_A lg:text-8xl panel flex justify-center items-center bg-gradient-to-r from-[#00ff5b] to-[#0014ff] text-4xl" id="component">
          <Link href='Pc_Automate' ref={Pc_Automate}>
            <a>PC_Automate</a>
          </Link>
        </div>   
       </div>
       </div>
     
  
   );
 };
 
 export default Home;
 