import React from 'react';
import logo from '@/images/logo.png';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className='w-full'>

      <div className='w-full h-1/4 flex overflow-x-scroll hide-scrollbar gap-2 p-2'>
        <div className="md:min-w-[33%] min-w-[50%] h-full bg-[#CCFFCC] md:rounded-md rounded-2xl p-4 shadow-md md:border-2">
          <p className='font-bold'>Highest Demand</p>
          <p className='text-2xl font-bold py-2'>Rice</p>
          <p className='text-[#34ff34] font-bold'>+100% per kg in months</p>
        </div>
        <div className="md:min-w-[33%] min-w-[50%] h-full bg-[#CCFFCC] md:rounded-md rounded-2xl p-4 shadow-md md:border-2">
          <p className='font-bold'>Highest Demand</p>
          <p className='text-2xl font-bold py-2'>Rice</p>
          <p className='text-[#34ff34] font-bold'>+100% per kg in months</p>
        </div>

        <div className="md:min-w-[33%] min-w-[50%] h-full bg-[#CCFFCC] md:rounded-md rounded-2xl p-4 shadow-md md:border-2">
          <p className='font-bold'>Highest Demand</p>
          <p className='text-2xl font-bold py-2'>Rice</p>
          <p className='text-[#34ff34] font-bold'>+100% per kg in months</p>
        </div>

        <div className="md:min-w-[33%] min-w-[50%] h-full bg-[#CCFFCC] md:rounded-md rounded-2xl p-4 shadow-md md:border-2">
          <p className='font-bold'>Highest Demand</p>
          <p className='text-2xl font-bold py-2'>Rice</p>
          <p className='text-[#34ff34] font-bold'>+100% per kg in months</p>
        </div>
      </div>


      <div className='w-full grid grid-row-1 md:grid-cols-2 gap-2 p-2'>

        <div className='w-full h-[45vh] grid-col-1 p-2  bg-[#CCFFCC] md:rounded-md rounded-2xl md:border-2'>
          Graph
        </div>

        <div className='w-full h-[45vh] grid-col-1 p-2  bg-white md:rounded-md rounded-2xl border-2 overflow-scroll hide-scrollbar'>
          <p className='p-2'>Title</p>

                  <div className='flex p-2'>
                    <img src="https://th.bing.com/th/id/OIP.MCmM1b-hj0SntnEkvZNAnwAAAA?rs=1&pid=ImgDetMain" className="w-10 h-10 bg-white rounded-3xl mr-2" />
                    <div>
                      <p className='text-sm'>Oscar</p>
                      <p className='text-sm'>email@figmasfakedomain.net</p>
                    </div>
                  </div>
                  <div className='flex p-2'>
                    <img src="https://th.bing.com/th/id/OIP.MCmM1b-hj0SntnEkvZNAnwAAAA?rs=1&pid=ImgDetMain" className="w-10 h-10 bg-white rounded-3xl mr-2" />
                    <div>
                      <p className='text-sm'>Oscar</p>
                      <p className='text-sm'>email@figmasfakedomain.net</p>
                    </div>
                  </div>
                  <div className='flex p-2'>
                    <img src="https://th.bing.com/th/id/OIP.MCmM1b-hj0SntnEkvZNAnwAAAA?rs=1&pid=ImgDetMain" className="w-10 h-10 bg-white rounded-3xl mr-2" />
                    <div>
                      <p className='text-sm'>Oscar</p>
                      <p className='text-sm'>email@figmasfakedomain.net</p>
                    </div>
                  </div>
                  <div className='flex p-2'>
                    <img src="https://th.bing.com/th/id/OIP.MCmM1b-hj0SntnEkvZNAnwAAAA?rs=1&pid=ImgDetMain" className="w-10 h-10 bg-white rounded-3xl mr-2" />
                    <div>
                      <p className='text-sm'>Oscar</p>
                      <p className='text-sm'>email@figmasfakedomain.net</p>
                    </div>
                  </div>
                  <div className='flex p-2'>
                    <img src="https://th.bing.com/th/id/OIP.MCmM1b-hj0SntnEkvZNAnwAAAA?rs=1&pid=ImgDetMain" className="w-10 h-10 bg-white rounded-3xl mr-2" />
                    <div>
                      <p className='text-sm'>Oscar</p>
                      <p className='text-sm'>email@figmasfakedomain.net</p>
                    </div>
                  </div>
                  <div className='flex p-2'>
                    <img src="https://th.bing.com/th/id/OIP.MCmM1b-hj0SntnEkvZNAnwAAAA?rs=1&pid=ImgDetMain" className="w-10 h-10 bg-white rounded-3xl mr-2" />
                    <div>
                      <p className='text-sm'>Oscar</p>
                      <p className='text-sm'>email@figmasfakedomain.net</p>
                    </div>
                  </div>
                  <div className='flex p-2'>
                    <img src="https://th.bing.com/th/id/OIP.MCmM1b-hj0SntnEkvZNAnwAAAA?rs=1&pid=ImgDetMain" className="w-10 h-10 bg-white rounded-3xl mr-2" />
                    <div>
                      <p className='text-sm'>Oscar</p>
                      <p className='text-sm'>email@figmasfakedomain.net</p>
                    </div>
                  </div>
                  
        </div>
        <div className='w-full h-[45vh] grid-col-1 p-2  bg-[#CCFFCC] md:rounded-md rounded-2xl md:border-2'>
          
        </div>
        <div className='w-full h-[45vh] grid-col-1 p-2  bg-[#CCFFCC] md:rounded-md rounded-2xl md:border-2'>
          Graph
        </div>

      </div>


    </div>
  );
}
