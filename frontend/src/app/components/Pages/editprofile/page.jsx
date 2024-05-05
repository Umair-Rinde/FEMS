'use client' 
import { BsPlusCircleFill, BsPencil } from 'react-icons/bs'
import { useState } from 'react';

const EditProfile = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('');
  const [region, setRegion] = useState('');
  const [cropsInfo, setCropsInfo] = useState(['']);
  const [bio, setBio] = useState('');

  const handleSaveChanges = () => {
    alert('Changes saved!');
  };

  const handleAddCrop = () => {
    setCropsInfo([...cropsInfo, '']);
  };

  return (
    <div className='w-full bg-[#ccffcc] p-2'>
      <div className="bg-[#e5ffe5] md:p-8 p-4 rounded-sm border-box md:w-4/5 w-full m-auto my-4 ">

        <span className='flex gap-2 '>
          <logo className="w-8 h-8 p-1 bg-[#34ff34] text-white shadow-sm rounded-[50%] border-2 border-white flex justify-center items-center">
          <BsPencil className="w-fit" />
          </logo>
          <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
        </span>
        <hr className='border-1 border-[#34ff34] my-2' />
        <div className='flex p-2 mb-4 bg-black text-white rounded-sm shadow-sm'>
          <img src="https://th.bing.com/th/id/OIP.MCmM1b-hj0SntnEkvZNAnwAAAA?rs=1&pid=ImgDetMain" className="w-10 h-10 bg-white rounded-3xl mr-2" />
          <div>
            <p className='text-sm font-semibold'>Oscar</p>
            <p className='text-sm'>email@figmasfakedomain.net</p>
          </div>
        </div>


        <form className='text-sm'>
          <label className="block my-2 font-semibold">Username:</label>
          <input
            type="text"
            value={username}
            placeholder='Enter Username'
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-sm"
          />

          <label className="block my-2 font-semibold">Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            placeholder='Enter Your Phone no'
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 border rounded-sm"
          />

          <label className="block my-2 font-semibold">Email:</label>
          <input
            type="email"
            value={email}
            placeholder='Enter Your Email Address'
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-sm"
          />

          <label className="block my-2 font-semibold">District:</label>
          <input
            type="text"
            value={district}
            placeholder='Enter Your District'
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full p-2 border rounded-sm"
          />

          <label className="block my-2 font-semibold">Region:</label>
          <input
            type="text"
            value={region}
            placeholder='Enter Region'
            onChange={(e) => setRegion(e.target.value)}
            className="w-full p-2 border rounded-sm"
          />

          <h2 className="font-semibold mt-4 my-2">Crops Information</h2>
          {cropsInfo.map((crop, index) => (
            <input
              key={index}
              type="text"
              value={crop}
              placeholder='Add Crops '
              onChange={(e) => {
                const updatedCropsInfo = [...cropsInfo];
                updatedCropsInfo[index] = e.target.value;
                setCropsInfo(updatedCropsInfo);
              }}
              className="w-full p-2 border rounded-sm my-2"
            />
          ))}
          <button
            type="button"
            onClick={handleAddCrop}
            className="text-[#278625] font-medium rounded-sm hover:underline flex justify-center items-center gap-2 px-2 my-2"
          >
            <BsPlusCircleFill /> Add More Crops
          </button>

          <label className="block mt-4 my-2">Bio (optional):</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-2 border rounded-sm"
          />

          <button
            type="button"
            onClick={handleSaveChanges}
            className="bg-black text-white px-4 py-1 rounded-sm mt-4 font-semibold shadow-md"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;