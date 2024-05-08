'use client'
import React, { useState } from 'react';
import { BsPlusCircle, BsInfoCircle } from 'react-icons/bs';
import Link from 'next/link';
import { toast } from 'react-toastify';


const GeneralInformation = () => {

  const [state, setState] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [districts, setDistricts] = useState('');
  const [region, setRegion] = useState('');
  const [crops, setCrops] = useState(['']); // Initial crop field
  const [aboutYou, setAboutYou] = useState('');

  const handleOnClickSubmit = ()=>{
    
    toast.success("You Succesfully Register To Farmer Empowerment App!");
  }


  // Function to handle adding a new crop field
  const handleAddCrop = () => {
    setCrops([...crops, '']);
  };

  // Function to handle crop input change
  const handleCropChange = (index, value) => {
    const updatedCrops = [...crops];
    updatedCrops[index] = value;
    setCrops(updatedCrops);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data (e.g., send to server)
    console.log('Form submitted:', {
      state,
      pinCode,
      districts,
      region,
      crops,
      aboutYou,
    });
  };

  return (
    <div className="w-full text-black">

      <div className="w-full  bg-[#ccffcc] md:p-4 p-2 ">
        
        <form onSubmit={handleSubmit} className="bg-[#e5ffe5] md:p-8 p-4 rounded-sm border-box md:w-4/5 w-full text-sm m-auto my-4">
        
        <span className='flex gap-2'>
        <BsInfoCircle className="w-8 h-8 bg-[#34ff34] text-white shadow-sm rounded-[50%]" />
        <h1 className="text-2xl font-bold mb-4">General Information</h1>
        </span>
        <hr className='border-1 border-[#34ff34] my-2' />

          <label className='w-full py-2  block m-2 font-semibold'>
            State:
            <input 
            type="text" 
            value={state} 
            placeholder=' Enter State Here'
            onChange={(e) => setState(e.target.value)} className="w-full p-2 my-1 border rounded-sm font-normal " />
          </label>


          <label className='w-full py-2  block m-2 font-semibold'>
            Pin Code:
            <input 
            type="text" 
            value={pinCode} 
            placeholder='Enter Your Pin Code'
            onChange={(e) => setPinCode(e.target.value)} className="w-full p-2 my-1 border rounded-sm font-normal" />
          </label>

          <label className='w-full py-2  block m-2 font-semibold'>
            Districts:
            <input 
            type="text" 
            value={districts} 
            placeholder='Enter Your District'
            onChange={(e) => setDistricts(e.target.value)} className="w-full p-2 my-1 border rounded-sm font-normal" />
          </label>

          <label className='w-full py-2  block m-2 font-semibold'>
            Region:
            <input 
            type="text" 
            value={region} 
            placeholder='Enter Your Region'
            onChange={(e) => setRegion(e.target.value)} className="w-full p-2 my-1 border rounded-sm font-normal" />
          </label>

          <label className='w-full py-2  block m-2 font-semibold'>
            What crops do you grow?
            {crops.map((crop, index) => (
              <input
                key={index} 
                type="text"
                value={crop}
                placeholder='Enter Crops  '
                onChange={(e) => handleCropChange(index, e.target.value)}
                className="w-full p-2 my-1 border rounded-sm font-normal"
              />
            ))}
            <button type="button" onClick={handleAddCrop} className="text-[#278625] font-medium rounded-sm hover:underline flex justify-center items-center gap-2 px-2 my-2"
            ><BsPlusCircle /> Add More Crops</button>
          </label>

          <label className='w-full py-2  block m-2 font-semibold'>
            About You (Optional):
            <textarea value={aboutYou} 
            placeholder='Enter Your Details'
            onChange={(e) => setAboutYou(e.target.value)} className="w-full p-2 my-1 border rounded-sm font-normal" />
          </label>

          <Link href='/login'>
          <button
          onClick={handleOnClickSubmit}
          type="submit" 
          className="bg-black text-white px-4 py-1 ml-2 rounded-sm font-semibold shadow-md">Save</button>
          </Link>
        </form>

      </div>

    </div>

  );
};

export default GeneralInformation;