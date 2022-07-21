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
    <div className="flex min-h-screen bg-[#1c1c1c] border-[9px] border-green-400">
 <Head>
 <link href="https://fonts.googleapis.com/css2?family=Aclonica&family=Fascinate&family=Josefin+Sans:wght@600&family=Luckiest+Guy&family=Potta+One&family=Rubik+Moonrocks&family=Sigmar+One&display=swap" rel="stylesheet" />
 </Head>
      <CNavbar/>
      <div className=' font-[Aclonica] text-[60px] mt-24 md:mt-36 ml-2 mr-2 md:ml-10 text-white'>
        Want to <br />
        start <br />
        something <br />
        intresting? <br />
        <div className="text-[16px] font-[Aclonica] mt-10 md:mt-32">
          Feel free to contact me if you are looking for the web
          <br /> developer. I have worked on projects involving the development
          <br /> and implementation of websites for non-profit organizations
          <br /> as well as worked as a freelance web developer.
        </div>
        <div className="ml-24  md:flex mt-24  z-10 md:ml-[500px] md:-mt-[450px]">

<div className="m-4 hover:scale-110">
  <a href="https://www.instagram.com/_raj_patel35/">
<Image src={insta} alt="Insta" height="100px" width="100px"   />
</a>
</div>
<div className="m-4 hover:scale-110">
  <a href='mailto:rajpatel2435@gmail.com'>
<Image src={gmail} alt="gmail" height="100px" width="100px"   />
</a>
</div>
<div className="m-4 hover:scale-105">
  <a href="https://www.linkedin.com/in/rajkumar-patel-5b5902222/">
<Image src={linkedin} alt="Linkedin" height="100px" width="100px"   />
</a>
</div>
<div className="m-4 hover:scale-110">
  <a href="https://github.com/rajpatel2435">
<Image src={github} alt="github" height="100px" width="100px"   />
</a>
</div>
</div>
      </div>
      
     </div>
  );
}

export default Contact;
