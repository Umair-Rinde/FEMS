import Image from 'next/image';
import logoImg from '@/images/logo.png';
import Link from 'next/link';
import { toast } from 'react-toastify';

export default function HeroSection() {
  const isLogined = true;

  const handleOnClickSubmit = ()=>{
    toast.success("You Succesfully Register To Farmer Empowerment App!");
  }
  const handleOnClickSubmit1 = ()=>{
    toast.success("You Succesfully Register To Farmer Empowerment App!");
  }
  
  return (
    <>
      <section className="w-full flex justify-between py-2 bg-black">

        <div className='justify-start flex'>
          <Image src={logoImg} alt="" className='w-8 h-8 pr-1 object-cover rounded-2xl' />
          <span className='p-1  text-[#3eff4b] font-bold'>Maha Kisaan</span>
        </div>
        <div  className='flex'>
          {isLogined ? 
            (
            <Link href='/login'>
              <button
              // onClick={handleOnClickSubmit1}
              className='bg-transparent text-sm hover:bg-[#1ccb27] text-white font-semibold hover:text-white px-4 p-1 border border-[#1ccb27] hover:border-transparent rounded'
              >
              Log Out
              </button>
            </Link>
            ) 
              :
            (
              <Link href='/login'>
                <button
              className='bg-transparent text-sm hover:bg-[#1ccb27] text-white font-semibold hover:text-white px-4 p-1 border border-[#1ccb27] hover:border-transparent rounded'
              onClick={handleOnClickSubmit}
              >
              Log In
              </button>
              </Link>)
          }
        </div>
      </section>
      </>
  )
}