import {BsPlusCircle, BsPlusCircleFill } from 'react-icons/bs'
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
    <div className="bg-[#ccffcc] p-8 rounded-sm border-box w-4/5 m-auto my-4 ">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      <form>
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

        <h2 className="text-lg font-semibold mt-4 my-2">Crops Information</h2>
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
        <BsPlusCircleFill/> Add More Crops
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
          className="bg-[#34ff34] text-white px-4 py-1 rounded-3xl mt-4 shadow-md"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;