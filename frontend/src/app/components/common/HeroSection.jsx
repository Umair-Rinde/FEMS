
import Image from 'next/image';
import logoImg from '@/images/logo.png';

export default function HeroSection() {
  const isLogined = true;
  return (
      <section className="w-screen flex justify-between p-2 bg-black">
        <div className='justify-start flex'>
          <Image src={logoImg} alt="" className='w-8 h-8 mr-1 object-cover rounded-2xl' />
          <span className='p-1  text-[#3eff4b] font-bold'>Maha Kisaan</span>
        </div>
        <div  className='flex'>
          {isLogined ? 
            (<button className='bg-transparent text-sm hover:bg-[#1ccb27] text-white font-semibold hover:text-white px-4 border border-[#1ccb27] hover:border-transparent rounded'>
              Log Out</button>) :
            (<button className='bg-transparent text-sm hover:bg-[#1ccb27] text-white font-semibold hover:text-white px-4 border border-[#1ccb27] hover:border-transparent rounded'>Log In</button>)
          }
        </div>
      </section>
  )
}