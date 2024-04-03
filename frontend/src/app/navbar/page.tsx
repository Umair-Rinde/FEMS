'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { BsFilterLeft, BsHouse, BsChat, BsCloudHaze } from "react-icons/bs";
// bi bi-filter-left
// cd femp-app/src


export default function page() {

const [menu,setMenu] = useState(false);

  return (
    <main>

      {/* black navbar */}
      <div className='w-[99vw] bg-black hidden md:block'>
        <span className=' flex p-2 '>
          <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1ifCx5.img" alt="" className='w-8 h-8 mr-2 object-cover rounded-2xl ' />
          <span className='p-1  text-[#3eff4b] font-bold'>Maha Kisaan</span>
        </span>
      </div>

      {/* navbar  */}
      <nav className='w-[99vw]  md:h-screen h-[50px]  bg-white flex' >

        {/* navbar  left side navigation */}
        <div className='md:w-[20%] w-screen  bg-white text-black border-r-2 font-medium'>

          <ul className='w-full flex justify-between p-2 text-[#3eff4b] font-bold border-b-2 border-zinc-300'>
            <div className='flex justify-start'>
              <button className='text-2xl pr-2 text-black' onClick={()=>setMenu(!menu)}>
              <BsFilterLeft />
              </button>
              Navigation
            </div>

            <div className='md:hidden flex justify-end gap-2 '>
              <span className='text-xl flex items-center justify-center text-black p-1 bg-blue-200 rounded-md'><BsCloudHaze /></span>
              <span className='text-sm flex items-center justify-center text-white p-1 bg-[#3eff4b] rounded-md'>Share</span>
              <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1ifCx5.img" alt="" className='w-8 h-8 object-cover rounded-2xl ' />
            </div>
          </ul>


          <div className={`${menu ? 'block h-screen': 'hidden'} md:block bg-white` }>
            {/* navabr side menu start */}
            <Link href="/">
              <ul className='nav-text-style'>
              <span className='nav-icon-style'><BsHouse /></span>
              Home
              </ul>
            </Link>

            <Link href="/">
              <ul className='nav-text-style'>
              <span className='nav-icon-style'><BsChat /></span>
               Crop
               </ul>
            </Link>

            <Link href="/">
              <ul className='nav-text-style'>
              <span className='nav-icon-style'><BsChat /></span>
               Master Defination
               </ul>
            </Link>

            <Link href="/">
              <ul className='nav-text-style'>
              <span className='nav-icon-style'><BsChat /></span>
              Crop Stock
              </ul>
            </Link>

            <Link href="/">
              <ul className='nav-text-style'>
              <span className='nav-icon-style'><BsChat /></span>
               Crop Planning
               </ul>
            </Link>

            <Link href="/">
              <ul className='nav-text-style'>
              <span className='nav-icon-style'><BsChat /></span>
               Crop Rates & Demands
               </ul>
            </Link>

            <Link href="/">
              <ul className='nav-text-style'>
              <span className='nav-icon-style'><BsChat /></span>
               Crop Positioning
               </ul>
            </Link>

            <Link href="/">
              <ul className='nav-text-style'>
              <span className='nav-icon-style'><BsChat /></span>
               Crop Statistics
               </ul>
            </Link>

            <Link href="/">
              <ul className='nav-text-style'>
              <span className='nav-icon-style'><BsChat /></span>
               Income & Expenses
               </ul>
            </Link>

            <Link href="/">
              <ul className='nav-text-style'>
              <span className='nav-icon-style'><BsChat /></span>
              Plots
              </ul>
            </Link>

            <Link href="/">
              <ul className='nav-text-style'>
              <span className='nav-icon-style'><BsChat /></span>
              Water Resourses
              </ul>
            </Link>

            <Link href="/">
              <ul className='nav-text-style'>
              <span className='nav-icon-style'><BsChat /></span>
               Manpower & Machinery
               </ul>
            </Link>

            <Link href="/">
              <ul className='nav-text-style'>
              <span className='nav-icon-style'><BsChat /></span>
               Sells & Purchase
               </ul>
            </Link>
          </div>

        </div>

        {/* navbar right side navigation */}

        <section className='w-[100%] hidden md:block md:w-[80%] '>

          <section className='w-[100%] h-[40px] flex justify-between p-2'>

            <div className='flex justify-start w-[50%] gap-2'>

              <input type="text" placeholder='Search' className='text-sm border-2 border-zinc-300 rounded-md p-3 w-[50%]' />

              <select name="Region" id="region" className='text-sm border-2 border-zinc-300 p-3  bg-gray-200  text-neutral-950'>
                <option value="region1">region</option>
                <option value="region2">region2</option>
              </select>

              <select name="Language" id="lang" className=' text-sm border-2 border-zinc-300 p-3  bg-gray-200  text-black'>
                <option value="lang1">language</option>
                <option value="lang2">lang2</option>
              </select>

            </div>

            <div className='flex justify-end w-[50%] gap-2 '>

              <span className='text-xl flex items-center justify-center  text-black p-4 bg-blue-200 rounded-sm'><BsCloudHaze /></span>
              <span className='text-sm flex items-center justify-center font-bold text-white p-4 bg-[#3eff4b] rounded-sm'>Share</span>
              <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1ifCx5.img" alt="" className='w-8 h-8 object-cover rounded-2xl ' />

            </div>

          </section>

          {/* content of app desktop*/}
          <section className='w-[100%] h-[94vh] overflow-y-scroll hide-scrollbar p-4 z-0'>
            <div className='w-[100%] h-[1000vh] p-4 bg-image'>
              hello
            </div>
          </section>

        </section>
      </nav>

    {/* content of app for mobile */}
      <section className={`${menu ? 'hidden': 'block'} md:hidden block w-[100%]  p-2 z-0`}>
            <div className='w-[100%] h-[1000vh] p-4 bg-image'>
              hello
            </div>
      </section>
    


      <footer className={`${menu ? 'hidden': 'block'} w-[99vw] bg-slate-400`}>
        footer data
      </footer>

    </main>
  )
}
// B3FFB3