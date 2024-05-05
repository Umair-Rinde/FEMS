import React from 'react';
import Image from 'next/image';
import logo from '@/images/logo.png';
import { BsFacebook, BsLinkedin, BsYoutube, BsInstagram } from 'react-icons/bs';

export default function Footer() {
  return (
    <section className='w-screen md:flex grid grid-col-1 bg-black text-white justify-between pt-4'>

      <div className='flex flex-col  p-4 font-semibold'>

            <div className='flex'>
              <Image src={logo} alt="logo" className='w-10 h-10 rounded-xl' />
              <span className='text-[#00FF00] pt-2'>Maha Kisaan </span>
            </div>

            <p className='text-[#00FF00]'>Empowering Farmers Digitally</p>

      </div>

      <div className='flex flex-col gap-2 md:p-2 p-4 text-[13px]'>

        <div className="md:flex ">

              <div className='px-8'>
                <li className='text-[#00FF00] list-none py-2 font-semibold'>Products</li>
                <li className='list-none py-2 hover:underline'>Ferilizers</li>
                <li className='list-none py-2 hover:underline'>Chemicals</li>
                <li className='list-none py-2 hover:underline'>Pesticides</li>
              </div>
              <div className='px-8'>
                <li className='text-[#00FF00] list-none py-2 font-semibold'>Support</li>
                <li className='list-none py-2 hover:underline'>About Us</li>
                <li className='list-none py-2 hover:underline'>Service</li>
                <li className='list-none py-2 hover:underline'>Help</li>
              </div>
              <div className='px-8'>
                <li className='text-[#00FF00] list-none py-2 font-semibold'>Contact</li>
                <li className='list-none py-2 hover:underline '>Email : username@gmail.com</li>
                <li className='list-none py-2'>Contact Us : +91 900000000</li>
                <li className='list-none py-2 hover:underline'>FAQs</li>
              </div>

        </div>

                <hr/>
                <p className='text-center'>@2024 Copyright. All right reserved</p>

      </div>

      <div className='flex flex-col md:p-4 p-10 gap-2 font-semibold text-[13px]'>

          <p>Find Us Here</p>

          <div className='flex w-[150px] bg-[#00FF00] p-1 rounded-sm gap-5'>
              <span><BsFacebook className="w-5 h-5  text-black" /></span>
              <span><BsLinkedin className="w-5 h-5  text-black" /></span>
              <span><BsYoutube className="w-5 h-5  text-black" /></span>
              <span><BsInstagram className="w-5 h-5  text-black" /></span>
          </div>

          <div className='flex'>
              <input type="text" placeholder='Email Address' className='text-gray-800 rounded-sm py-1 px-4' />
              <button className='bg-[#00FF00] rounded-sm mx-2 py-1 px-4'>Enter</button>
          </div>

      </div>
      
    </section>
  )
}
