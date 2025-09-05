import CustomContainer from "../../components/layout/CustomContainer";
import SectionHeader from "../../components/shared/SectionHeader";
import LessonsCard from "./LessonsCard";

export default function LessonsPage() {
  return (
    <CustomContainer>
      <SectionHeader
        title="Lessons"
        par="Explore our wide range of courses designed to help you learn and grow."
      />
      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(380px,1fr))]">
        {Array.from({ length: 12 }).map((_, i) => (
          <LessonsCard key={i} />
        ))}
      </div>
    </CustomContainer>
  );
}
