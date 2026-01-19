import Navbar from "@/components/Navbar";
import HomeIntro from "@/components/Homeintro"; 
import Services from "@/components/Services";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f4cad5]">
      <Navbar />
      <HomeIntro />
      <Services />
    </div>
  );
};

export default Home;
