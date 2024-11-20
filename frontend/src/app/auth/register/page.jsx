"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { CiPhone, CiLock } from 'react-icons/ci';
import { MdAlternateEmail } from "react-icons/md";

import logoImg from '../../../images/logo.png';
// import API_URL from '@/utils/url';
import API_URL from '../../../utils/url';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState(''); 	
  const [language, setLanguage] = useState('English'); 	
  const [email, setEmail] = useState('');

  const onRegister = async (e)  => {
    e.preventDefault();
    // Here you can implement the logic to sign up the user
    const data = {
		email,
		username: firstName + " " + middleName + " " + lastName,
		phone: phoneNumber,
		password,
		password2: password,
		// userType,
	};''

	let res = await fetch(API_URL + "/accounts/register/", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	if(res.ok){
		res = await res.json();
		console.log(res);
	} else {
		res = await res.json();
		console.log('Error fetching data', res.status);
	}
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    // Here you can implement logic to change the language
  };

  return (
	<main className="min-h-screen w-screen bg-green-800 flex justify-end">
		<section className="bg-green-2 min-h-screen w-screen flex items-center justify-center lg:w-1/2 lg:rounded-2xl
			transtion-all duration-200 ease-linear bg-green-1"
		>
			<div className="bg-white flex flex-col gap-5 items-center py-4 px-5 rounded-2xl lg:rounded-4xl w-4/5 lg:w-3/5"
				style={{
					boxShadow: '5px 5px 10px #00000040',
				}}
			>
				<logo className="bg-white rounded-full p-4 w-fit">
					<Image 
						src={logoImg}
						className="w-24 h-24"
					/>
				</logo>
				<h2 className="flex flex-col items-center gap-2">
					<span className="text-green-600 font-bold">Empowering Farmers Digitally</span>
					<span className="text-green-900 font-bold">Welcome</span>
				</h2>
				<form className="w-full flex flex-col items-center gap-3">
					<div className="flex items-center gap-2">
						<InputField 
							placeholder="Firstname"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<InputField 
							placeholder="Middlename"
							value={middleName}
							onChange={(e) => setMiddleName(e.target.value)}
						/>
						<InputField 
							placeholder="Lastname"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<InputField 
						placeholder="Phone number"
						value={phoneNumber}
						icon={<CiPhone />}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
					<InputField 
						placeholder="Email"
						value={email}
						icon={<MdAlternateEmail />}
						type="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<InputField 
						placeholder="Set password"
						value={password}
						icon={<CiLock />}
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<InputField 
						placeholder="Confirm password"
						value={confirmPassword}
						icon={<CiLock />}
						type="password"
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					<RadioInput 
						onSelect={(e) => setUserType(e.target.value)}
						options={["Farmer", "Retailer"]}
						label="User type"
						name="usertype"
					/>
					<button 
						className="bg-black hover:bg-gray-800 w-full py-3 text-sm font-semibold text-center text-white rounded-2xl"
						onClick={(e) => onRegister(e)}
					>
						Register
					</button>
					<divider className="flex items-center w-full justify-center my-1">
						<span className="h-[0.5px] bg-gray-400 w-1/3"></span>
						<span className="w-1/2 text-center text-gray-500 text-sm">or continue with</span>
						<span className="h-[0.5px] bg-gray-400 w-1/3"></span>
					</divider>
					<Link 
						href="/login-google" 
						className="bg-white hover:bg-gray-200 rounded-2xl py-3 w-full flex gap-2 items-center justify-center"
					>
						<FcGoogle className="text-xl"/>
						<span className="font-semibold text-sm">Google</span>
					</Link>
				</form>
				<div className="w-full text-center text-xs">
					By clicking you agree to our <b className="font-semibold">Terms of Service</b> <br/>
					<b className="font-semibold">and Privacy Policy</b>
				</div>
			</div>
		</section>
	</main>	
	)
}

const InputField = ({placeholder, value, onChange,type="text",icon}) => {
    return (
        <div className="px-3 py-2 bg-white rounded-2xl w-full flex items-center gap-3 border-[0.1px] border-[#0000f]">
            {icon && <span className="text-lg opacity-50">{icon}</span>}
            <input 
                type={type} placeholder={placeholder}
                className="outline-none w-full opacity-95"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

const RadioInput = ({label, name, onSelect, options }) => {
	return (
		<div className="w-full flex flex-col gap-1 px-2 mt-1">
			<label className="font-semibold ml-1 text-sm">{label}</label>
			<div className="flex gap-8 py-1 px-2">
				{options.map((option) => (
					<span className="flex gap-2 items-center justify-center pt-1">
						<input 
								type="radio" 
								name={name} 
								value={option}
								onSelect={onSelect}
						/>
						<label className="text-lg font-semibold">{option}</label>
					</span>
				))}
			</div>
		</div>
	)
}