import CustomContainer from "../../components/layout/CustomContainer";
import SectionHeader from "../../components/shared/SectionHeader";
import ExamsCard from "./ExamsCard";

export default function ExamsPage() {
  return (
    <CustomContainer>
      <SectionHeader
        title="Exams"
        par="Take your available exams and test your knowledge."
      />
      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(380px,1fr))]">
        {Array.from({ length: 12 }).map((_, i) => (
          <ExamsCard key={i} />
        ))}
      </div>
    </CustomContainer>
  );
}
