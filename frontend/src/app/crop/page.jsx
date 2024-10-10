import React from 'react'

export default function Home() {

  return (
    <main className='w-full h-[99vh] overflow-y-scroll hide-scrollbar p-2'>
        <div className='w-[100%] p-2 text-black'>
          <div className='flex flex-wrap gap-2 w-full'>
            <div className='bg-[#acffb1] p-2 w-full  rounded-md'>
              <p className='font-extrabold text-sm p-1'>Highest Demand</p>
              <h1 className='font-bold text-xl p-1'>Rice</h1>
              <p className='text-[#38ff45] text-sm font-extrabold p-1'>per kg month</p>
            </div>
            <div className='bg-[#acffb1] p-2 w-full rounded-md'>
              <p className='font-extrabold text-sm p-1'>Highest Demand</p>
              <h1 className='font-bold text-xl p-1'>Rice</h1>
              <p className='text-[#38ff45] text-sm font-extrabold p-1'>per kg month</p>
            </div>
            <div className='bg-[#acffb1] p-2 w-full  rounded-md'>
              <p className='font-extrabold text-sm p-1'>Highest Demand</p>
              <h1 className='font-bold text-xl p-1'>Rice</h1>
              <p className='text-[#38ff45] text-sm font-extrabold p-1'>per kg month</p>
            </div>
          </div>
        </div>
    </main>
  );
}