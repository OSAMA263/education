import CustomContainer from "../../components/layout/CustomContainer";
import AchievmentSection from "./components/AchievmentSection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ReviewsSection from "./components/ReviewsSection";
import SEOWrapper from "@/components/layout/SEOWrapper";

export default function HomePage() {
  return (
    <SEOWrapper
      des="Explore interactive lessons and practice exams designed to help you learn faster and track your progress easily."
      title="Edu"
    >
      <CustomContainer>
        {/* the frist section */}
        <HeroSection />
        {/* our services */}
        <ServicesSection />
        {/* what we achived or somehshit */}
        <AchievmentSection />
        {/* reiews */}
        <ReviewsSection />
      </CustomContainer>
    </SEOWrapper>
  );
}
