"use client";
import { Navbar, Footer, Header } from "../components";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";

const PageWraper = (PageComponent, id = null) =>
  function Page() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      let email = localStorage.getItem('email');
      if(email){
        setLoading(false);
      } else {
        router.push('/auth/login');
      }
    }, [])

    if(loading){ 
        return (
          <div className="h-screen w-screen flex items-center justify-center text-7xl">Loading...</div>
        )
    }
    
    return (
      <div className="w-full min-h-screen flex flex-col bg-white">
        <Header />
        <Navbar />
        <div className="flex items-center justify-center min-h-screen w-full py-10 px-4 md:px-20">
          <PageComponent />
        </div>
        <Footer />
      </div>
    );
  };

export default PageWraper;
