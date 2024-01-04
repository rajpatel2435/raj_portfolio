import React from "react";
import Image from "next/image";
import kaayu from "./Images/kaayu.png";
import html from "./Images/html.png";
import js from "./Images/js.png";
import sql from "./Images/mysql.png";
import pcss from "./Images/pexel_css.png";
import react from "./Images/react.png";
import next from "./Images/next.png";
import sass from "./Images/sass.png";
import php from "./Images/php.png";
import github from "./Images/github.png";
import wordpress from "./Images/wordpress.png";
import tailwind from "./Images/tailwind-css.png";
import jquery from "./Images/jquery.png";
import xd from "./Images/xd.png";
import isi from "./Images/isi.png";
import Navbar from "./Navbar";
import mongo from "./Images/Mongo.jpg";
import express from "./Images/express.png";
import node from "./Images/node.png";
import pacific from "./Images/pacific.jpg";
import Link from "next/link";

// import cv from './cv.pdf'

function About_info() {
  return (
    <div className=" overflow-hidden cursor-default">
      <div className=' flex  justify-center items-center text-8xl   min-h-[100vh] text-white font-extrabold font-["Aclonica"] front'>
        About Me
      </div>

      <Navbar />

      <div className=" block font-['tahoma'] md:flex md:justify-center md:items-center min-h-screen bg-black text-2xl text-white">
        <div className="ml-40 md:ml-24 hover:scale-125">
          Hello world <span className="">🙏</span>
        </div>
        <br />
        <div className="ml-10 text-8xl mt-10  md:ml-36">
          I am a Web Developer, working in Montreal <br />
          <div className="ml-[10px]">
            <a
              href="https://isimtl365-my.sharepoint.com/:b:/g/personal/rpatel5_isi-montreal_com/EehqR1RIHn9Gp0qMAmSN7doBbCfZu5-CL8TKnh_nsb4lTg?e=S2mfxc"
              download
            >
              <button
                type="submit"
                className="p-5 bg-green-500 rounded-full text-2xl hover:bg-yellow-500 "
              >
                Resume{" "}
              </button>
            </a>
          </div>
          <div className="text-2xl mt-40 p-10 text-zinc-400 mr-10 mb-10">
            If you are intrested in my work please feel free to contact me at{" "}
            <a href="mailto:r4jp47e1@gmail.com" className="hover:text-white">
              r4jp47e1@gmail.com
            </a>{" "}
            . I&apos;ll be glad to know more about you and your projects.
          </div>
        </div>
      </div>


      <div className="flex justify-center items-center text-6xl  font-extrabold   p-2 bg-black text-white md:w-[900px] ml-auto mr-auto mt-10 rounded-2xl ">
        Internship
      </div>


      <div className="flex justify-center flex-col items-center md:flex md:justify-center md:items-center md:w-full md:flex-row ">
        <div className="w-1/2 align-middle text-center flex justify-center ">
        <Link href="https://kaayu.ca/">
          <Image src={pacific} width={200} height={200} alt="Kaayu" className=" bg-cover" />
        </Link>
        </div>
        <div className=" text-2xl md:text-4xl md:ml-10 md:p-4 md:w-1/2">
          {" "}
         WordPress/ PHP Developer
          <p className="text-xl md:text-2xl ">
            {" "}
            Pacific Programming & Tech Inc, Montreal<br />
            Aug 2023 - Ongoing
          </p>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center md:flex md:justify-center md:items-center md:w-full md:flex-row ">
        <div className="w-1/2 align-middle text-center flex justify-center ">
        <Link href="https://kaayu.ca/">
          <Image src={'https://www.globalcommercemedia.com/wp-content/themes/gcm-site-theme/images/logo1.min.svg'} width={200} height={200} alt="Kaayu" className=" bg-cover" />
        </Link>
        </div>
        <div className=" text-2xl md:text-4xl md:ml-10 md:p-4 md:w-1/2">
          {" "}
          Search Engine Optimization Specialist
          <p className="text-xl md:text-2xl ">
            {" "}
            Global Commerce Media GmbH,USA <br />
            Jan 2023 - Jul 2023 
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col   md:flex md:justify-center md:items-center md:flex-row">
      <div className="w-1/2 align-middle text-center flex justify-center">
        <Link href="https://kaayu.ca/">
          <Image src={kaayu} width={200} height={200} alt="Kaayu" className=" bg-cover" />
        </Link>

        </div>
   
        <div className=" text-2xl md:text-4xl md:ml-10 md:p-4 md:w-1/2">
          {" "}
          WEB Integrator
          <p className="text-xl md:text-2xl ">
            {" "}
            Kaayu Tech,Montreal <br />
            Feb 2022- Aug 2022
          </p>
        </div>
      </div>



      <div className="flex justify-center items-center text-6xl  font-extrabold   p-2 bg-green-600 text-white md:w-[900px] ml-auto mr-auto mt-10 rounded-2xl ">
        Education
      </div>
      <div className="flex justify-center items-center flex-col   md:flex md:justify-center md:flex-row md:items-center p-4">
        {/* <Image src={isi} height='100px' width='200px' className=' bg-cover rounded-full ' /> */}
        <div className="w-1/2 align-middle text-center flex justify-center">
        <Image src={isi} width={300} height={20} alt="ISI college" className=" bg-cover" />
        </div>
        <div className=" text-2xl md:text-4xl md:ml-10 md:p-4 md:w-1/2">
          {" "}
          WEB Integration
          <p className="text-2xl ">
            {" "}
            ISI College,Montreal <br />
            SEP2020- SEP2022
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center text-6xl  font-extrabold   p-2 mb-10 bg-blue-800 text-white md:w-[900px] ml-auto mr-auto mt-10 rounded-2xl ">
      Skills
      </div>
      <div className=" grid grid-cols-1 md:grid md:grid-cols-4">
        {/* <div className='hovr '> */}
        <div className="ml-10  mb-3 mt-3 ">
          <div className="box">
            <div className="content ">
              <Image
                src={html}
                alt="Html"
                className="img  rounded-full  hover:scale-90"
              />
              <h2 className="">
                HTML
                <span>
                  <br />
                  95%
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="ml-10 md:ml-24 ">
          <div className="box">
            <div className="content ">
              <Image
                src={pcss}
                alt="css"
           
                className="img  rounded-full  hover:scale-90"
              />
              <h2>
                CSS
                <span>
                  <br />
                  95%
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="ml-10 md:ml-24 mt-4 ">
          <div className="box">
            <div className="content ">
              <Image
                src={js}
                alt="JS"
        
                className="img    hover:scale-90"
              />
              <h2 className="">
                JS
                <span>
                  <br />
                  89%
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div>
          <div className=" ml-10  mb-3 mt-3  ">
            <div className=" box">
              <div className="content ">
                <Image
                  src={sql}
                  alt="SQL"
             
                  className=" img hover:scale-90"
                />
                <h2 className="">
                  SQL
                  <span>
                    <br />
                    82%
                  </span>
                </h2>

                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid md:grid-cols-4">
        {/* <div className='hovr '> */}
        <div className="ml-10  mb-3 mt-3  ">
          <div className="box">
            <div className="content ">
              <Image
                src={mongo}
                alt="Html"
                className="img  rounded-full  hover:scale-90"
              />
              <div className="mt-16">
                {" "}
                <h2 className="mt-10">
                  Mongo
                  <span>
                    <br />
                    87%
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-10 md:ml-24 ">
          <div className="box">
            <div className="content ">
              <Image
                src={express}
                alt="express"
                height={200}
                width={200}
                className="img  rounded-full  hover:scale-90"
              />
              <h2>
                Express
                <span>
                  <br />
                  82%
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="ml-10 md:ml-24 mt-4 ">
          <div className="box">
            <div className="content ">
              <Image
                src={react}
                alt="react js"
         
                className="img    hover:scale-90"
              />
              <h2 className="">
                React
                <span>
                  <br />
                  89%
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div>
          <div className=" ml-10  mb-3 mt-3  ">
            <div className=" box">
              <div className="content ">
                <Image
                  src={node}
                  alt="node"
     
                  className=" img hover:scale-90"
                />
                <h2 className="">
                  Node
                  <span>
                    <br />
                    82%
                  </span>
                </h2>

                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid md:grid-cols-4">        <div className="ml-10 ">
          <div className="box">
            <div className="content ">
              <Image
                src={xd}
                alt="React"
                className="img  rounded-full  hover:scale-90"
              />
              <h2 className="">
                xd
                <span>
                  <br />
                  80%
                </span>
              </h2>

              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="ml-10 md:ml-24 ">
          <div className="box">
            <div className="content ">
              <Image
                src={next}
                alt="Next"
                className="img  rounded-full  hover:scale-90"
              />
              <h2 className="">
                NEXT Js
                <span>
                  <br />
                  80%
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="ml-10 md:ml-24 ">
          <div className="box r2">
            <div className="content ">
              <Image
                src={sass}
                alt="sass"
        
                className="img   hover:scale-90"
              />
              <h2 className="">
                SASS
                <span>
                  <br />
                  86%
                </span>
              </h2>

              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="ml-10  ">
          <div className="box">
            <div className="content ">
              <Image
                src={php}
                alt="PHP"
            
                className="img  rounded-full  hover:scale-90"
              />
              <h2 className="">
                PHP
                <span>
                  <br />
                  75%
                </span>
              </h2>

              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid md:grid-cols-4">
        <div className="ml-10  mt-3 mb-3   ">
          <div className="box">
            <div className="content ">
              <Image
                src={github}
                alt="Github"
                className="img  rounded-full  hover:scale-90"
              />
              <h2 className="">
                Github
                <span>
                  <br />
                  80%
                </span>
              </h2>

              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="ml-10 md:ml-24 ">
          <div className="box">
            <div className="content ">
              <Image
                src={wordpress}
                alt="wordPress"
                className="img  rounded-full  hover:scale-90"
              />
              <h2 className="">
                WordPress
                <span>
                  <br />
                  88%
                </span>
              </h2>

              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="ml-10 md:ml-24 mt-4 ">
          <div className="box">
            <div className="content mt-16 items-center ">
              <Image
                src={tailwind}
                alt="tailwind"
                className="img rounded-full "
              />
              <h2 className="">
                Tailwind
                <span className="">
                  <br />
                  95%
                </span>
              </h2>

              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="ml-5 mr-20  ">
          <div className="box">
            <div className="content">
              <Image
                src={jquery}
                alt="jquery"
                className="img  rounded-full  hover:scale-90"
              />
              <h2 className="">
                JQuery
                <span>
                  <br />
                  80%
                </span>
              </h2>

              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className='block md:ml-48 m-5 lg:flex  cursor-grab'>
      <div className='ml-10  lg:-ml-40 md:ml-24 mb-3 mt-3'>
          <div className="box">
            <div className="content ">
              <Image src={xd} alt="XD" className='img  rounded-full  hover:scale-90' />
              <h2 className=''>XD<span><br />91%</span></h2>

              {/* </div> */}
      {/* </div> */}

      {/* </div> */}

      {/* </div> */}

      {/* </div> */}
    </div>
  );
}

export default About_info;

{
  /* I have worked on projects involving the development and implementation of websites for non-profit organizations as well as worked as a freelance web developer.

Additionally, I am experienced in developing projects using various programming languages such as React, Node Js, Express Js and PHP as well as with a number of programming tools such as Visual Studio Code, MYSQL, Selenium, Adobe Photoshop and also with HTML/CSS. I have also spent a significant amount of time working with the SEO of websites. 
       */
}
