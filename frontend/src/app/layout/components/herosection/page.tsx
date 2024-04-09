import React from 'react'
import Image from 'next/image'
import logo from '../../../public/images/logo.jpg'

export default function page() {
  return (
        <main className='bg-black'>
        {/* black navbar */}
          <section className=' flex p-2 justify-between'>
            <div className='justify-start flex'>
            <Image src={logo} alt="" className='w-8 h-8 mr-2 object-cover rounded-2xl ' />
            <span className='p-1  text-[#3eff4b] font-bold'>Maha Kisaan</span>
            </div>
            <div  className='flex gap-2'>
              <button className='bg-transparent text-sm hover:bg-[#1ccb27] text-white font-semibold hover:text-white px-4 border border-[#1ccb27] hover:border-transparent rounded'>Log In</button>
              <button className='bg-transparent text-sm hover:bg-[#1ccb27] text-white font-semibold hover:text-white px-4 border border-[#1ccb27] hover:border-transparent rounded'>Log Out</button>
            </div>
          </section>
        </main>
    
  )
}
