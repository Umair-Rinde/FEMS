"use client"
import { useState } from 'react';
import logo from '../../../images/logo.png';
import Image from 'next/image';
import { BsGoogle, BsFacebook, BsInstagram, BsTelegram, BsTwitterX } from 'react-icons/bs';
import Link from 'next/link';

export default function SignupPage() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [language, setLanguage] = useState('English');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Here you can implement the logic to sign up the user
    console.log({
      firstName,
      middleName,
      lastName,
      phoneNumber,
      password,
      confirmPassword,
      userType,
    });
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    // Here you can implement logic to change the language
  };

  return (
    <div className="bg-[#ccffcc] min-h-screen flex flex-row ">

      <div className='hidden lg:block w-1/2 bg-white'>

      </div>

      <div className='lg:w-1/2 w-full my-2'>
        <div className="flex m-2 flex-row justify-end">
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="appearance-none bg-blue-500 border text-white px-4 py-1  rounded shadow focus:outline-none focus:shadow-outline"
          >

            <option value="English">English &#11162;  </option>
            <option value="Hindi">Hindi &#11162; </option>
            <option value="Marathi">Marathi &#11162; </option>

          </select>

        </div>

        <div className="bg-[#e5ffe5] p-4 rounded-md md:w-4/5 mb-4 md:m-auto m-2 shadow-2xl text-sm ">
          <logo className="bg-white rounded-full p-4  w-fit flex m-auto">
            <Image
              src={logo}
              className="w-24 h-24"
            />
          </logo>
          <h1 className=" text-3xl mb-4 text-center font-bold">Create an Account</h1>
          <form onSubmit={handleSignUp} className='md:p-4 ext-sm'>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
                First Name:
              </label>
              <input
                type="text"
                placeholder='Enter Your First Name'
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="middleName" className="block text-gray-700 font-bold mb-2">
                Middle Name:
              </label>
              <input
                type="text"
                placeholder='Enter Your Middle Name'
                id="middleName"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
                Last Name:
              </label>
              <input
                type="text"
                placeholder='Enter Your Last Name'
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
                Phone Number:
              </label>
              <input
                type="tel"
                placeholder='Enter Your Phone Number'
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
                Confirm Password:
              </label>
              <input
                type="password"
                placeholder='Confirm Password'
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 gap-2">
              <label className="block text-gray-700 font-bold">User Type:</label>

              <input
                type="radio"
                id="farmer"
                name="userType"
                value="Farmer"
                onChange={() => setUserType('Farmer')}
                required
              />
              <label htmlFor="farmer" className="m-2">
                Farmer
              </label>

              <input
                type="radio"
                id="retailer"
                name="userType"
                value="Retailer"
                onChange={() => setUserType('Retailer')}
                required
              />
              <label htmlFor="retailer" className="ml-2">
                Retailer
              </label>

            </div>
            <Link href="/generalInformation">
            <button
              type="submit"
              className="bg-black text-sm text-white p-3 rounded-3xl w-full font-bold"
            >
              Submit
            </button>
            </Link>
          </form>
          <div className="text-center m-2 text-blue-800">
            Already have an account? <a href="#">Sign In</a>
          </div>
          <divider className="flex items-center w-full justify-center my-1">
            <span className="h-[0.5px] bg-gray-400 w-1/3"></span>
            <span className="w-1/2 text-center text-gray-500 text-sm">or continue with</span>
            <span className="h-[0.5px] bg-gray-400 w-1/3"></span>
          </divider>

          <div className="flex justify-center md:gap-8 gap-4 m-4">
            <button className="bg-green-400 text-white md:p-4 p-2 text-xl rounded-full hover:bg-green-500">
              <BsGoogle />
            </button>
            <button className="bg-blue-600 text-white md:p-4 p-2 text-xl rounded-full hover:bg-blue-500">
              <BsFacebook />
            </button>
            <button className="bg-pink-600 text-white md:p-4 p-2 text-xl rounded-full hover:bg-pink-500">
              <BsInstagram />
            </button>
            <button className="bg-blue-500 text-white md:p-4 p-2 text-xl rounded-full hover:bg-blue-400">
              <BsTelegram />
            </button>
            <button className="bg-gray-800 text-white md:p-4 p-2 text-xl rounded-full hover:bg-gray-700">
              <BsTwitterX />
            </button>
          </div>
          <p className="mt-4 text-center">
            By clicking continue, you agree to our <span className='font-semibold'><a href="#">Terms of Service</a> and{' '}
              <a href="#">Privacy Policy</a>.</span>
          </p>
        </div>
          
      </div>
    </div>
  );
}
