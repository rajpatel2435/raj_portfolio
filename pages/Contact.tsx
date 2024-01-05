import React from "react";
import Image from "next/image";
import github from "./Images/github.png"
import insta from './Images/ig-instagram.png'
import gmail from './Images/gmail.png'
import linkedin from './Images/linkedin-app.png'

import Head from "next/head";
import CNavbar from "./Cnavbar";

function Contact() {
  return (
    <>


      <CNavbar/>

     <div className=" min-h-screen bg-[#1c1c1c] border-[9px] border-green-400 overflow-hidden flex flex-col md:flex-row">
<div className="md:w-1/2 flex justify-center items-center">
<div className=' font-[Aclonica] text-[47px] md:text-[70px]   ml-2 mr-2 text-white '>
        Want to <br />
        start <br />
        something <br />
        intresting? <br />
        <div className="text-[16px] font-[Aclonica] md:text-[25px]   lg:mt-2 xl:mt-10">
          Feel free to contact me if you are looking for the web
          <br /> developer. I have worked on projects involving the development
          <br /> and implementation of websites for non-profit organizations
          <br /> as well as worked as a freelance web developer.
        </div>
</div>
</div>

<div className="md:w-1/2 w-full flex justify-center items-center ">
<div className="m-4 hover:scale-110">
  <a href="https://www.instagram.com/_raj_patel35/">
<Image src={insta} alt="Insta" className=" w-20 h-20 md:w-40 md:h-40"  />
</a>
</div>
<div className="m-4 hover:scale-110">
  <a href='mailto:r4jp47e1@gmail.com'>
<Image src={gmail} alt="gmail"  className=" w-20 h-20 md:w-40 md:h-40"  />
</a>
</div>
<div className="m-4 hover:scale-105">
  <a href="https://www.linkedin.com/in/rajpatel23/">
<Image src={linkedin} alt="Linkedin"   className=" w-20 h-20 md:w-40 md:h-40"  />
</a>
</div>
<div className="m-4 hover:scale-110">
  <a href="https://github.com/rajpatel2435">
<Image src={github} alt="github"   className=" w-20 h-20 md:w-40 md:h-40"   />
</a>
</div>
</div>
     </div>
     </>
  );
}

export default Contact;
