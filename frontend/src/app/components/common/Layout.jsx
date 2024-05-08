// import Home from '@/app/layout/page';
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import SideNavbar from "./SideNavbar";
import Footer from "./Footer";

export default function Layout({children}) {


    return (
        <main className="w-screen min-h-screen flex flex-col items-center  ">
        <HeroSection />
        <Navbar />
        <div className="flex w-screen">
              <div className="flex md:w-[20%] ">
              <SideNavbar/>
              </div>
              <div className="h-screen md:w-[80%] overflow-scroll hide-scrollbar">
                {children}
              </div>
          </div>
        <Footer/>
        
      </main>
    )
}
