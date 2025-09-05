import LayoutMain from "../../components/shared/LayoutMain"
import AchievmentSection from "./components/AchievmentSection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ReviewsSection from "./components/ReviewsSection";

export default function HomePage() {
  return (
    <LayoutMain>
      {/* the frist section */}
      <HeroSection />
      {/* our services */}
      <ServicesSection />
      {/* what we achived or somehshit */}
      <AchievmentSection />
      {/* reiews */}
      <ReviewsSection />
    </LayoutMain>
  );
}
