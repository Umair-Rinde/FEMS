
import React from 'react';
import Image from 'next/image';

import { PageWraper } from "@/app/hoc";
import { yourCrops, relatedCrops } from '@/constants';

const CropCard = ({index, name, variety, rate, img}) => {
  return (
    <div className="p-2 md:p-3 bg-primary rounded-xl">
      <div className="bg-white p-1 w-40 h-28 rounded-lg overflow-hidden">
        <Image 
          alt={name}
          src={img}
          className="w-full h-full object-cover rounded-lg hover:scale-125 transition-all duration-200"
        />
      </div>
      <div className="flex flex-col p-1">
        <span className="font-semibold text-lg">{name}</span>
        <span className="text-sm text-gray-600 font-semibold">{variety}</span>
        <span className="text-sm font-semibold text-green-900">Rs. {rate} per/kg</span>
      </div>
    </div>
  )
}

const Crops = () => {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">Your crops</h2>
        <div className="flex flex-wrap gap-5 md:gap-10 p-2">
          {yourCrops.map((crop,index) => (
            <CropCard key={index} {...crop} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">Related crops</h2>
        <div className="flex flex-wrap gap-5 md:gap-10 px-2">
          {relatedCrops.map((crop,index) => (
            <CropCard key={index} {...crop} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default PageWraper(Crops);