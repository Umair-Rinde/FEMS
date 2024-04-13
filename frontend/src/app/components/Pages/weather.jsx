import React from 'react';
import { BsCloudSun } from 'react-icons/bs';

export default function weather() {
    return (
        <section className='p-2'>

            <div className='w-full grid md:grid-cols-4 grid-cols-1 md:gap-2'>

                <div className='md:grid flex md:col-span-1 rounded-md shadow-sm p-4 bg-[#CCFFCC] justify-between'>
                    <div >
                        <p className='font-bold '>Maharashtra, INDIA</p>
                        <p>Sunday, 24th March</p>
                    </div>

                    <div className='flex w-full'>
                        <BsCloudSun className='text-[100px] p-2' />
                        <div>
                            <p className='text-[60px] font-bold'>21°C</p>
                            <p >Mostly Sun</p>
                        </div>
                    </div>
                </div>

                <div className='flex md:flex-row flex-col col-span-3 p-2 bg-[#CCFFCC] rounded-md justify-center'>
                    <div className='flex'>
                        <div className='p-4 flex flex-col justify-center items-center font-bold'>
                            <p>High Temp.</p>
                            <p className='md:text-[50px] text-[30px]'>21<span className='md:text-[30px]'>°C</span></p>
                        </div>
                        <div className='p-4 flex flex-col justify-center items-center font-bold'>
                            <p>Low Temp.</p>
                            <p className='md:text-[50px] text-[30px]'>21<span className='md:text-[30px]'>°C</span></p>
                        </div>
                        <div className='p-4 flex flex-col justify-center items-center font-bold'>
                            <p>Wind</p>
                            <p className='md:text-[50px] text-[30px]'>20<span className='md:text-[30px]'>Km/Hr</span></p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='p-4 flex flex-col justify-center items-center font-bold'>
                            <p>Rain</p>
                            <p className='md:text-[50px] text-[30px]'>90<span className='md:text-[30px]'>%</span></p>
                        </div>
                        <div className='p-4 flex flex-col justify-center items-center font-bold'>
                            <p className='text-[#1f911f]'>SunRise:</p>
                            <p>05.30am</p>
                            <hr />
                            <p className='text-[#1d941d]'>SunSet:</p>
                            <p>06.30pm</p>
                        </div>
                    </div>
                </div>
            </div>



            <p className='font-bold p-2'>Today's Weather </p>
            <div className='w-[100%] h-[24vh] flex overflow-x-scroll hide-scrollbar gap-2 justify-around'>
                <div className='md:min-w-[20%] min-w-[30%] h-[20vh] flex flex-col justify-center items-center rounded-md shadow-md border-gray-200 border-2 p-2 text-2xl font-bold'>
                    <p className='p-2'>1 am</p>
                    <BsCloudSun />
                    <p className='p-2'>21°C</p>
                </div>
                <div className='md:min-w-[20%] min-w-[30%] h-[20vh] flex flex-col justify-center items-center rounded-md shadow-md border-gray-200 border-2 p-2 text-2xl font-bold'>
                    <p className='p-2'>1 am</p>
                    <BsCloudSun />
                    <p className='p-2'>21°C</p>
                </div>
                <div className='md:min-w-[20%] min-w-[30%] h-[20vh] flex flex-col justify-center items-center rounded-md shadow-md border-gray-200 border-2 p-2 text-2xl font-bold'>
                    <p className='p-2'>1 am</p>
                    <BsCloudSun />
                    <p className='p-2'>21°C</p>
                </div>
                <div className='md:min-w-[20%] min-w-[30%] h-[20vh] flex flex-col justify-center items-center rounded-md shadow-md border-gray-200 border-2 p-2 text-2xl font-bold'>
                    <p className='p-2'>1 am</p>
                    <BsCloudSun />
                    <p className='p-2'>21°C</p>
                </div>
                <div className='md:min-w-[20%] min-w-[30%] h-[20vh] flex flex-col justify-center items-center rounded-md shadow-md border-gray-200 border-2 p-2 text-2xl font-bold'>
                    <p className='p-2'>1 am</p>
                    <BsCloudSun />
                    <p className='p-2'>21°C</p>
                </div>
                <div className='md:min-w-[20%] min-w-[30%] h-[20vh] flex flex-col justify-center items-center rounded-md shadow-md border-gray-200 border-2 p-2 text-2xl font-bold'>
                    <p className='p-2'>1 am</p>
                    <BsCloudSun />
                    <p className='p-2'>21°C</p>
                </div>
            </div>

            <p className='font-bold p-2'>Tommorow Weather </p>
            <div className='md:flex p-2 bg-[#CCFFCC] rounded-md md:text-2xl mb-2'>

                <div className='flex justify-around md:w-[50%]'>
                    <div className='text-[30px] p-2 flex flex-col justify-center items-center font-bold'>
                        <BsCloudSun />
                    </div>
                    <div className='p-4 flex flex-col justify-center items-center'>
                        <p className='font-bold'>Mon</p>
                        <p>25/3</p>
                    </div>
                    <div className='p-2 flex flex-col justify-center items-center '>
                        <p className='font-bold'>Rain</p>
                        <p>90%</p>
                    </div>
                </div>
                <div className='flex justify-around md:w-[50%]'>
                    <div className='p-2 flex flex-col justify-center items-center '>
                        <p className='font-bold'>Low Temp.</p>
                        <p>21°C</p>
                    </div>
                    <div className='p-2 flex flex-col justify-center items-center '>
                        <p className='font-bold'>Wind</p>
                        <p>20Km/Hr</p>
                    </div>
                    <div className='p-4 flex flex-col justify-center items-center '>
                        <p className='font-bold'>High Temp.</p>
                        <p>21°C</p>
                    </div>

                </div>

            </div>

            <div className='md:flex p-2 bg-[#CCFFCC] rounded-md md:text-2xl mb-2'>

                <div className='flex justify-around md:w-[50%]'>
                    <div className='text-[30px] p-2 flex flex-col justify-center items-center font-bold'>
                        <BsCloudSun />
                    </div>
                    <div className='p-4 flex flex-col justify-center items-center'>
                        <p className='font-bold'>Mon</p>
                        <p>25/3</p>
                    </div>
                    <div className='p-2 flex flex-col justify-center items-center '>
                        <p className='font-bold'>Rain</p>
                        <p>90%</p>
                    </div>

                </div>
                <div className='flex justify-around md:w-[50%]'>
                    <div className='p-2 flex flex-col justify-center items-center '>
                        <p className='font-bold'>Low Temp.</p>
                        <p>21°C</p>
                    </div>
                    <div className='p-2 flex flex-col justify-center items-center '>
                        <p className='font-bold'>Wind</p>
                        <p>20Km/Hr</p>
                    </div>
                    <div className='p-4 flex flex-col justify-center items-center '>
                        <p className='font-bold'>High Temp.</p>
                        <p>21°C</p>
                    </div>
                </div>

            </div>

            <div className='md:flex p-2 bg-[#CCFFCC] rounded-md md:text-2xl mb-2'>

                <div className='flex justify-around md:w-[50%]'>
                    <div className='text-[30px] p-2 flex flex-col justify-center items-center font-bold'>
                        <BsCloudSun />
                    </div>
                    <div className='p-4 flex flex-col justify-center items-center'>
                        <p className='font-bold'>Mon</p>
                        <p>25/3</p>
                    </div>
                    <div className='p-2 flex flex-col justify-center items-center '>
                        <p className='font-bold'>Rain</p>
                        <p>90%</p>
                    </div>

                </div>
                <div className='flex justify-around md:w-[50%]'>
                    <div className='p-2 flex flex-col justify-center items-center '>
                        <p className='font-bold'>Low Temp.</p>
                        <p>21°C</p>
                    </div>
                    <div className='p-2 flex flex-col justify-center items-center '>
                        <p className='font-bold'>Wind</p>
                        <p>20Km/Hr</p>
                    </div>
                    <div className='p-4 flex flex-col justify-center items-center '>
                        <p className='font-bold'>High Temp.</p>
                        <p>21°C</p>
                    </div>

                </div>

            </div>

            <div className='md:flex p-2 bg-[#CCFFCC] rounded-md md:text-2xl mb-2'>

                <div className='flex justify-around md:w-[50%]'>
                    <div className='text-[30px] p-2 flex flex-col justify-center items-center font-bold'>
                        <BsCloudSun />
                    </div>
                    <div className='p-4 flex flex-col justify-center items-center'>
                        <p className='font-bold'>Mon</p>
                        <p>25/3</p>
                    </div>
                    <div className='p-2 flex flex-col justify-center items-center '>
                        <p className='font-bold'>Rain</p>
                        <p>90%</p>
                    </div>
                </div>
                <div className='flex justify-around md:w-[50%]'>
                    <div className='p-2 flex flex-col justify-center items-center '>
                        <p className='font-bold'>Low Temp.</p>
                        <p>21°C</p>
                    </div>
                    <div className='p-2 flex flex-col justify-center items-center '>
                        <p className='font-bold'>Wind</p>
                        <p>20Km/Hr</p>
                    </div>
                    <div className='p-4 flex flex-col justify-center items-center '>
                        <p className='font-bold'>High Temp.</p>
                        <p>21°C</p>
                    </div>

                </div>

            </div>


        </section>
    )
}
