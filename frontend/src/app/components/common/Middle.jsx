'use client'
import React, { useState } from 'react'
import { BsHouse, BsChat, BsGear } from 'react-icons/bs';
import Link from 'next/link';

import HomePage from "../Pages/HomePage";
import Weather from '../Pages/weather';

export default function Middle() {
    const [link, setLink] = useState("Homepage");
    return (
        <div className="flex w-screen">

            <div className="flex md:w-[20%] ">
                <div className="md:flex hidden w-full flex-col bg-white border-r-2 border-gray-200">
                    <Link href='/homepage' onClick={() => setLink("homepage")}>
                        <ul className='nav-text-style' >
                            <span className='nav-icon-style'><BsHouse /></span>
                            Home
                        </ul>
                    </Link>

                    <Link href='/crop' onClick={() => setLink("")}>
                        <ul className='nav-text-style' >
                            <span className='nav-icon-style'><BsChat /></span>
                            Crop
                        </ul>
                    </Link>


                    <Link href='/masterDefination' onClick={() => setLink("")}>
                        <ul className='nav-text-style' >
                            <span className='nav-icon-style'><BsChat /></span>
                            Master Defination
                        </ul>
                    </Link>


                    <Link href='/cropStock' onClick={() => setLink("")}>
                        <ul className='nav-text-style' >
                            <span className='nav-icon-style'><BsChat /></span>
                            Crop Stock
                        </ul>
                    </Link>


                    <Link href='/cropPlanning' onClick={() => setLink("")}>
                        <ul className='nav-text-style' >
                            <span className='nav-icon-style'><BsChat /></span>
                            Crop Planning
                        </ul>
                    </Link>


                    <Link href='/cropRates&Demands' onClick={() => setLink("")}>
                        <ul className='nav-text-style' >
                            <span className='nav-icon-style'><BsChat /></span>
                            Crop Rates & Demands
                        </ul>
                    </Link>


                    <Link href='/cropPositioning' onClick={() => setLink("")}>
                        <ul className='nav-text-style' >
                            <span className='nav-icon-style'><BsChat /></span>
                            Crop Positioning
                        </ul>
                    </Link>


                    <Link href='/cropStatistics' onClick={() => setLink("")}>
                        <ul className='nav-text-style' >
                            <span className='nav-icon-style'><BsChat /></span>
                            Crop Statistics
                        </ul>
                    </Link>


                    <Link href='/income&Expenses' onClick={() => setLink("")}>
                        <ul className='nav-text-style' >
                            <span className='nav-icon-style'><BsChat /></span>
                            Income & Expenses
                        </ul>
                    </Link>


                    <Link href='/Plots' onClick={() => setLink("")}>
                        <ul className='nav-text-style' >
                            <span className='nav-icon-style'><BsChat /></span>
                            Plots
                        </ul>
                    </Link>


                    <Link href='/waterResourses' onClick={() => setLink("")}>
                        <ul className='nav-text-style' >
                            <span className='nav-icon-style'><BsChat /></span>
                            Water Resourses
                        </ul>
                    </Link>


                    <Link href='/manpower&Machinery' onClick={() => setLink("")}>
                        <ul className='nav-text-style' >
                            <span className='nav-icon-style'><BsChat /></span>
                            Manpower & Machinery
                        </ul>
                    </Link>


                    <Link href='/sells&Purchase' onClick={() => setLink("")}>
                        <ul className='nav-text-style' >
                            <span className='nav-icon-style'><BsChat /></span>
                            Sells & Purchase
                        </ul>
                    </Link>

                    <Link href='/setting' onClick={() => setLink("")}>
                        <ul className='nav-text-style' >
                            <span className='nav-icon-style'><BsGear /></span>
                            Setting
                        </ul>
                    </Link>


                </div>
            </div>

            <div className="h-[90vh] md:w-[80%] overflow-scroll hide-scrollbar">
               <HomePage />
               <Weather/>
            </div>

        </div>
    )
}
