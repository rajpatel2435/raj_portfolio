import type { NextPage } from "next";

import About from "./About";

import Projects from "./Projects";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";
import Link from "next/link";

import Hnavbar from "./Hnavbar";
import Footer from "./Footer";

const Home: NextPage = () => {
   gsap.registerPlugin(ScrollTrigger);

   useLayoutEffect(() => {

    
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }  
  }, []);
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
        snap: 1 / (component.length - 1),
        end: () => "+=" +container.offsetWidth,
      },
    });
  }, []);
  return (
    <>
   
    <div className="main2">
 <Hnavbar /> 
   
      <div id="container">
      <div className="panel" id="component">
          
        <About />
        </div>  
        <div className="panel" id="component">
  
        <Projects />
        </div>
        </div> 
     <div className="text-xl text-white z-40">
  
        <Footer/>
  
            </div>
    
      </div>

     </>
  );
};

export default Home;
