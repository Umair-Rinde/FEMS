import HeroSection from "../components/common/HeroSection";
import Navbar from "../components/common/Navbar";
import Middle from "../components/common/Middle";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <HeroSection />
      <Navbar />
      <Middle/>
      <Footer/>
      
    </main>
  )
}

export default Home;

