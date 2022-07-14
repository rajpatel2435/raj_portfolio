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
      <div className=' font-serif text-[60px] mt-24  ml-10  text-white'>
        Want to <br />
        start <br />
        something <br />
        intresting? <br />
        <div className="text-[16px] font-mono mt-10">
          Feel free to contact me if you are looking for the web
          <br /> developer. I have worked on projects involving the development
          <br /> and implementation of websites for non-profit organizations
          <br /> as well as worked as a freelance web developer.
        </div>

      </div>
      <div className=" md:flex mt-60 m-4 z-10">

      <div className="m-4">
      <Image src={insta} height="100px" width="100px"   />
      </div>
      <div className="m-4">
      <Image src={gmail} height="100px" width="100px"   />
      </div>
      <div className="m-4">
      <Image src={linkedin} height="100px" width="100px"   />
      </div>
      <div className="m-4">
      <Image src={github} height="100px" width="100px"   />
      </div>
      </div>
    </div>
  );
}

export default Contact;
