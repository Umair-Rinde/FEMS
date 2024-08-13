"use client";
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

import { navLinks } from "@/constants";

const NavItem = ({title, path, options}) => {
  if(!path){
    return (
      <div className="relative group text-sm font-semibold py-3">
        <button
          className="w-full h-full px-2 hover:text-gray-500"
        >{title}</button>
        <ul className="w-full list-none hidden group-hover:flex hover:flex flex-col 
          absolute left-0 top-[90%] border rounded-lg bg-white-100 backdrop-blur"
        >
          {options.map((option) => (
            <Link href={option.path} className="px-3 py-2 w-fit hover:text-tertiary">
              {option.title}
            </Link>
          ))}
        </ul>
      </div>
    );
  }
  
  return (
    <Link href={path} className="text-sm font-semibold px-2 py-3 hover:text-tertiary">
      {title}
    </Link>
  )
}

const NavItemMobile = ({title, path, options}) => {
  const [toggle, setToggle] = useState(false);
  if(!path){
    return (
      <div className="px-2 py-1 flex font-semibold items-start flex-col text-lg">
        <button
          onClick={() => setToggle(!toggle)}
        >{title}</button>
        
        {toggle && options.length>0 && 
          <ul className="flex flex-col list-none p-2">
            {options.map((option) => (
              <Link href={option.path} 
                className="text-gray-700 focus:text-tertiary py-2 font-bold"
              >
                {option.title}
              </Link>
          ))}
          </ul>
        }
      </div>
    );
  }
  
  return (
    <Link href={path} className="px-2 py-1 font-semibold focus:text-tertiary text-lg">
      {title}
    </Link>
  )
}


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex justify-center items-center">
      <ul className="hidden md:flex items-center gap-6 justify-center 
        border-2 my-2 px-5 rounded-full">
        {navLinks.map((navlink) => (
          <NavItem 
            title={navlink.title} 
            path={navlink?.path}
            options={navlink?.options}
          />
        ))}
      </ul>

      <div className="w-full flex items-center justify-end md:hidden relative pr-4">
        <button className="text-4xl">
          {toggle ? 
            <RxCross2
              onClick={() => setToggle(false)}
            /> : 
            <RiMenu3Line
              onClick={() => setToggle(true)}
            />
          }
        </button>
           
        {toggle &&
          <ul className="bg-white-100 flex flex-col absolute z-10 right-7 top-12 backdrop-blur-sm border p-2 rounded-lg">
            {navLinks.map((navlink) => (
              <NavItemMobile 
                title={navlink.title} 
                path={navlink?.path}
                options={navlink?.options}
              />
            ))}
          </ul>
        }
      </div>
    </nav>
  )
}

export default Navbar;