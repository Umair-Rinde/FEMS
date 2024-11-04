'use client' 
import { BsPencil, BsPlusCircle } from 'react-icons/bs'
import { useState } from 'react';
import Image from 'next/image';

import { PageWraper } from '../hoc';
import { sample_profile_img } from '../../images';
import { myprofile } from '../../constants';
import { TextArea, TextInput } from "../components/inputs";

const EditProfile = () => {
  const [username, setUsername] = useState(myprofile.username);
  const [phoneNumber, setPhoneNumber] = useState(myprofile.phoneNumber);
  const [email, setEmail] = useState(myprofile.email);
  const [district, setDistrict] = useState(myprofile.district);
  const [region, setRegion] = useState(myprofile.region);
  const [cropsInfo, setCropsInfo] = useState(myprofile.cropsInfo);
  const [bio, setBio] = useState(myprofile.bio);
  const [address, setAddress] = useState("");

  const handleSaveChanges = () => {
    alert('Changes saved!');
  };

  const handleAddCrop = () => {
    setCropsInfo([...cropsInfo, '']);
  };

  const handleCropInfoChange = (e,index) => {
    const updatedCropsInfo = [...cropsInfo];
    updatedCropsInfo[index] = e.target.value;
    setCropsInfo(updatedCropsInfo);
  }

  return (
    <main className="form-container">
      <h1 className="form-heading">
        <BsPencil />
        Edit profile
      </h1>
      <section className="flex items-center gap-5 p-4">
        <Image 
          src={sample_profile_img}
          className="w-20 h-20 rounded-full object-contain"
        />
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-bold">{username}</h2>
          <button className="font-semibold text-gray-700">Change profile photo</button>
        </div>
      </section>

      <section className="flex flex-col gap-7">
        <TextInput 
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="e.g. @ramnaresh12"
        />
        <TextInput 
          label="Phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="number"
          placeholder="+AB XXXXXXXXXX"
        />
        <TextInput 
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="e.g. abc@xyz.com"
        />
        
        <TextInput 
          label="District"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          placeholder="e.g. dhule (maharashtra)"
        />
        <TextInput 
          label="Region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          placeholder="e.g. vidarbha (maharashtra)"
        />
        <TextArea 
          label="Detailed Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Street 1 "
        />
        <div className="w-full flex flex-col">
          <label className="text-sm font-semibold pl-1">Crops</label>
          {cropsInfo.map((crop,index) => (
            <TextInput 
              value={crop} 
              onChange={(e) => handleCropInfoChange(e, index)}
            />
          ))}
          <button className="flex flex-start items-center gap-2 p-2"
            onClick={handleAddCrop}
          >
            <BsPlusCircle />
            <span className="hover:underline hover:font-semibold">Add crop info</span>
          </button>
        </div>
        <TextArea 
          label="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="I am a farmer from ... region, and ..."
        />
      </section>
      <button 
        onClick={handleSaveChanges}
        className="py-2 px-4 rounded font-semibold text-white bg-black hover:bg-gray-700 w-fit "
      >
        Save Changes
      </button>
    </main>
  );
};

export default PageWraper(EditProfile);