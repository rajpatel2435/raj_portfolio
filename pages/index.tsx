import type { NextPage } from "next";

import About from "./About";

import Projects from "./Projects";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";
import Link from "next/link";

import Hnavbar from "./Hnavbar";
import Footer from "./Footer";
import  Head  from "next/head";

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

    
      </div>
    
      <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>

     </>
  );
};

export default Home;
