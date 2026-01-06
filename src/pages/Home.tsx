import HeroBanner from "@/components/home/HeroBanner";
import CategorySection from "@/components/home/CategorySection";
import TrendingSection from "@/components/home/TrendingSection";

const Home = () => {
  return (
    <div className="flex flex-col gap-12">
      <HeroBanner />
      <CategorySection />
      <TrendingSection />
    </div>
  );
};

export default Home;
