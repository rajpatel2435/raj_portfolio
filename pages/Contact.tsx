import React from "react";
import Image from "next/image";
import github from "./Images/github.png"
import insta from './Images/ig-instagram.png'
import gmail from './Images/gmail.png'
import linkedin from './Images/linkedin-app.png'
import { link } from "fs/promises";
import Navbar from "./Navbar";
import Link from "next/link";

function Contact() {
  return (
    <div className="flex min-h-screen bg-[#1c1c1c] border-[9px] border-green-400">
 
      <Navbar/>
      <div className=' font-[Aclonica] text-[60px] mt-24  ml-10  text-white'>
        Want to <br />
        start <br />
        something <br />
        intresting? <br />
        <div className="text-[16px] font-[Aclonica] mt-10">
          Feel free to contact me if you are looking for the web
          <br /> developer. I have worked on projects involving the development
          <br /> and implementation of websites for non-profit organizations
          <br /> as well as worked as a freelance web developer.
        </div>

      </div>
      <div className=" md:flex mt-60 m-4 z-10">

      <div className="m-4 hover:scale-110">
        <a href="https://www.instagram.com/_raj_patel35/">
      <Image src={insta} height="100px" width="100px"   />
      </a>
      </div>
      <div className="m-4 hover:scale-110">
        <a href='mailto:rajpatel2435@gmail.com'>
      <Image src={gmail} height="100px" width="100px"   />
      </a>
      </div>
      <div className="m-4 hover:scale-105">
        <a href="https://www.linkedin.com/in/rajkumar-patel-5b5902222/">
      <Image src={linkedin} height="100px" width="100px"   />
      </a>
      </div>
      <div className="m-4 hover:scale-110">
        <a href="https://github.com/rajpatel2435">
      <Image src={github} height="100px" width="100px"   />
      </a>
      </div>
      </div>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Aclonica&family=Amatic+SC:wght@400;700&family=Luckiest+Guy&family=Potta+One&family=Rubik+Moonrocks&display=swap');</style>
    </div>
  );
}

export default Contact;
