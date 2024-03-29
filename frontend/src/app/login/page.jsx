'use client';

import logoImg from '@/images/logo.png';
import Image from 'next/image';
import { useState } from 'react';
import { CiUser, CiLock} from 'react-icons/ci';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <main className="h-screen w-screen bg-green-800 flex justify-end">
            <section className="bg-green-2 h-screen w-screen flex items-center justify-center lg:w-1/2 lg:rounded-2xl
                transtion-all duration-200 ease-linear"
            >
                <div className="bg-green-1 flex flex-col gap-6 items-center py-7 px-5 rounded-2xl lg:rounded-4xl w-4/5 lg:w-3/5"
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
                        <InputField 
                            placeholder="Username"
                            value={username}
                            icon={<CiUser />}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <InputField 
                            placeholder="Password"
                            value={password}
                            icon={<CiLock />}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Link href="/forgot-password" className="font-semibold text-xs my-2">Forgot password?</Link>
                        <button className="bg-black hover:bg-gray-800 w-full py-3 text-sm font-semibold text-center text-white rounded-2xl">
                            Login
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
                    <div className="w-full text-center mt-7 text-xs">
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

export default Login;