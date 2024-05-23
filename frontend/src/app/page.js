import HeroSection from "@/app/components/common/HeroSection";
import Navbar from "@/app/components/common/Navbar";
import Middle from "@/app/components/common/Middle";
import Footer from "@/app/components/common/Footer";

const Home = () => {
  return (
    <main className="w-screen min-h-screen flex flex-col items-center scroll-hidden">
      <HeroSection />
      <Navbar />
      <Middle/>
      <Footer/>
    </main>
  )
}

export default Home;