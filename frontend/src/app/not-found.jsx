'use client';

import Image from "next/image";
import notFoundImg from "../images/not-found.jpg";
import { MdRefresh } from "react-icons/md";

const NotFound = () => {
    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center gap-10">
            <div className="h-1/2">
                <Image 
                    src={notFoundImg}
                    className="h-full w-auto"
                />
            </div>
            <span className="text-xl md:text-2xl font-semibold mt-10">
                    Resource Not Found : <r className="text-red-500">404</r>
            </span>
            <button 
                className="bg-green-500 hover:bg-green-800 text-white lg:text-xl font-semibold py-2 px-5 rounded-lg
                 flex items-center gap-2"
                onClick={refreshPage}
            >
                <span className="lg:text-lg">Refresh</span>
                <MdRefresh className="text-lg lg:text-xl"/>
            </button>
        </main>
    )
}

export default NotFound;