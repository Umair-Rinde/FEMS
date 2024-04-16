import React from 'react';
import {BsHouse,BsChat,BsGear} from 'react-icons/bs';
import Link from 'next/link';

export default function SideNavbar() {
  return (
      <div className="md:flex hidden w-full flex-col bg-white border-r-2">
              <Link href='/' >
                <ul className='nav-text-style' >
                  <span className='nav-icon-style'><BsHouse /></span>
                  Home
                </ul>
              </Link>

              <Link href='/crop' >
                <ul className='nav-text-style' >
                  <span className='nav-icon-style'><BsChat /></span>
                  Crop
                </ul>
              </Link>


              <Link href='/masterDefination'>
                <ul className='nav-text-style' >
                  <span className='nav-icon-style'><BsChat /></span>
                  Master Defination
                </ul>
              </Link>


              <Link href='/cropStock'>
                <ul className='nav-text-style' >
                  <span className='nav-icon-style'><BsChat /></span>
                  Crop Stock
                </ul>
              </Link>


              <Link href='/cropPlanning'>
                <ul className='nav-text-style' >
                  <span className='nav-icon-style'><BsChat /></span>
                  Crop Planning
                </ul>
              </Link>


              <Link href='/cropRates&Demands'>
                <ul className='nav-text-style' >
                  <span className='nav-icon-style'><BsChat /></span>
                  Crop Rates & Demands
                </ul>
              </Link>


              <Link href='/cropPositioning'>
                <ul className='nav-text-style' >
                  <span className='nav-icon-style'><BsChat /></span>
                  Crop Positioning
                </ul>
              </Link>


              <Link href='/cropStatistics'>
                <ul className='nav-text-style' >
                  <span className='nav-icon-style'><BsChat /></span>
                  Crop Statistics
                </ul>
              </Link>


              <Link href='/income&Expenses'>
                <ul className='nav-text-style' >
                  <span className='nav-icon-style'><BsChat /></span>
                  Income & Expenses
                </ul>
              </Link>


              <Link href='/Plots'>
                <ul className='nav-text-style' >
                  <span className='nav-icon-style'><BsChat /></span>
                  Plots
                </ul>
              </Link>


              <Link href='/waterResourses'>
                <ul className='nav-text-style' >
                  <span className='nav-icon-style'><BsChat /></span>
                  Water Resourses
                </ul>
              </Link>


              <Link href='/manpower&Machinery'>
                <ul className='nav-text-style' >
                  <span className='nav-icon-style'><BsChat /></span>
                  Manpower & Machinery
                </ul>
              </Link>


              <Link href='/sells&Purchase'>
                <ul className='nav-text-style' >
                  <span className='nav-icon-style'><BsChat /></span>
                  Sells & Purchase
                </ul>
              </Link>

              <Link href='/setting'>
                <ul className='nav-text-style' >
                  <span className='nav-icon-style'><BsGear/></span>
                  Setting
                </ul>
              </Link>
              

            </div>
  )
}
