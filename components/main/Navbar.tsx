import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { Github } from 'lucide-react';
const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50" >
      {/* z-50 px-10 */}
      {/* <span className="font-bold hidden md:block text-gray-300 sm:text-3xl text-xl tracking-tight">
        Xanmoy
      </span> */}
      
      <div className="w-full h-full flex flex-row items-center justify-center ">
        {/* m-auto px-[10px] */}
        {/* <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center space-x-2 ml-10"
        >
          {/* <Image
            src="/"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />  

          {/* <span className="font-bold hidden md:block text-gray-300 sm:text-3xl text-xl tracking-tight">
            Xanmoy
          </span> 
        </a> */}

        <div className="w-[500px] h-full flex flex-row items-center justify-between ">
          {/* md:mr-20 */}
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mx-4  px-[20px] py-[10px] rounded-full text-gray-200">
            {/* mr-[15px] */}
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="https://github.com/xanmoy?tab=repositories" className="cursor-pointer">
              Repositories
            </a>
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
          </div>
        </div>
       
        <div className="flex flex-row gap-5">
          {/* {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))} */}
          {/* <Github className="text-white" /> */}
        </div>
      </div>
    </div>

    
  );
};

export default Navbar;
