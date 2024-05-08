'use client'
import React, { useState } from 'react';
import { BsCloudSun,BsFilterLeft, BsShare } from 'react-icons/bs';
import Link from 'next/link';
import {toast} from 'react-toastify';


export default function Navbar() {

  const [msg, setMsg] = useState("");

  const handleSendButtonClick = ()=>{
    toast.info("Search Bar In Progress.."+'\n'+'</> Thank You.');
  }

  return (
    <nav className='w-screen h-[50px] flex bg-white border-b-2 p-2 ' >


        <div className='flex w-[20%]'>
        <button className='text-2xl pr-2 text-[#174218] md:hidden  font-extrabold'><BsFilterLeft /></button>
          <p className='font-bold text-[#3eff4b] text-xl pt-1'>Navigation</p>
        </div>

        <div className='flex w-[80%]'>

          <div className='md:flex hidden w-[80%] justify-start gap-2'>
            <input
              type="text"
              placeholder='Search Here..'
              value={msg}
              onChange={(e) => { setMsg(e.target.value); }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSendButtonClick();
                }
              }}
              className='text-sm border-2 border-zinc-300 rounded-sm border-b-[#3eff4b] p-3 w-[50%] text-black' />

            <select name="Region" id="region" className='text-sm border-2 border-zinc-300 px-4 border-b-[#3eff4b]  text-neutral-950'>
              <option value="region1">region</option>
              <option value="region2">region2</option>
            </select>

            <select name="Language" id="lang" className=' text-sm border-2 border-zinc-300 border-b-[#3eff4b] px-4 text-black'>
              <option value="lang1">language</option>
              <option value="lang2">lang2</option>
            </select>

          </div>

          <div className='flex md:w-[20%] w-screen justify-end gap-2 '>
            {/* <span className='text-2xl flex items-center justify-center text-blue-500 p-1  rounded-md' title='Weather Info'><BsCloudSun /></span> */}
            <span className='text-sm flex items-center justify-centertext-black text-white bg-[#3eff4b] font-extrabold p-2 rounded-md gap-2' title="Share to"><BsShare /> Share</span>
            

            <Link href="/components/Pages/editprofile">
            <img 
            src='https://th.bing.com/th/id/OIP.MCmM1b-hj0SntnEkvZNAnwAAAA?rs=1&pid=ImgDetMain' 
            alt="profileImg" 
            className='w-8 h-8  flex justify-center align-middle object-cover rounded-2xl shadow-xl border-1 border-black' 
            title='Account' />
            </Link>
          </div>

        </div>

    </nav>
  )
}


