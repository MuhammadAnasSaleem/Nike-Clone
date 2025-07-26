import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import {hamburger} from "../assets/assets/icons";
import {headerLogo} from "../assets/assets//images";
import { navLinks } from "../constant";

const Nav = () => {
    const [isOpen,setIsOpen]= useState(false)
  return (
    <header className=' padding-x  py-8  w-full absolute z-10 '>

        <nav className='flex justify-between items-center max-container'>
            <a href="/"> <img src={headerLogo} alt="HeaderLogo" className='m-0 w-[129px] h-[29px]' /></a>
            <ul className='flex justify-center items-center flex-1 gap-16 max-lg:hidden'>
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a href={item.href}
                         className='font-montserrat leading-normal text-lg text-slate-gray'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='gap-2 font-medium font-montserrat flex text-lg leading-normal max-lg:hidden wide:mr-24'><a href="/">SignIn</a><span>/</span><a href="/">Explore Now</a></div>
        <div className='hidden max-lg:block cursor-pointer text-3xl' onClick={()=>{setIsOpen(!isOpen)}}>
            {isOpen ? <FiX/>:<FiMenu/>}
        </div>

        {/* {isOpen && (
            <div className="absolute bg-white shadow-lg  w-full top-20 left-0 flex flex-col items-center gap-3 transition-all duration-1000 ease-in-out"
            >
         
               {navLinks.map((item)=>(
            
                <a href={item.href}
                key={item.label}
                className="text-lg font-montserrat text-slate-gray"
                onClick={()=>{setIsOpen(false)}}>{item.label}</a>
            

            ))}
         
        </div>
        )} */}
        <div className={` absolute bg-white/40 backdrop-blur-[6px] border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_2px_1px_rgba(255,255,255,0.1)] 
  w-full top-24 left-0 overflow-hidden transition-all duration-1000 ease-in-out ${isOpen ? "max-h-96 py-4" : "max-h-0"}`} >
            <ul className={`flex flex-col gap-3 list-none items-center `} >
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a href={item.href}
                        className="text-lg font-montserrat text-slate-gray"
                        onClick={()=>setIsOpen(false)}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        </nav>

    </header>
  )
}

export default Nav