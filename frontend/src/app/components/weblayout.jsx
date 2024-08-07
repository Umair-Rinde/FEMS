'use client';

import HeroSection from "./HeroSection";
import SideNavbar from "./SideNavbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const WebLayout = ({children}) => {
    return (
        <div>
            <HeroSection />
            <Navbar />
            <section className="flex w-screen">
                <div className="flex md:w-[20%]">
                <SideNavbar/>
                </div>
                <div className="h-screen md:w-[80%] overflow-scroll hide-scrollbar">
                    {children}
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default WebLayout;