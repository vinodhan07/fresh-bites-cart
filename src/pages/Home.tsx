import HeroSection from "@/components/home/HeroSection";
import FeaturedFruits from "@/components/home/FeaturedFruits";
import PromoSection from "@/components/home/PromoSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedFruits />
      <PromoSection />
    </div>
  );
};

export default Home;