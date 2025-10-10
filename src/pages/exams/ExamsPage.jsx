import { useGetAllExams } from "@/hooks/useExams";
import CustomContainer from "../../components/layout/CustomContainer";
import SectionHeader from "../../components/shared/SectionHeader";
import ExamsCard from "./ExamsCard";
import LoaderPage from "../LoaderPage";
import ErrorPage from "../ErrorPage";
import { useAuthData } from "@/routes/AuthProvider";

export default function ExamsPage() {
  const { data, isLoading, error } = useGetAllExams();
  const { profile } = useAuthData();

  const examsByClassLevel = () => {
    if (profile?.role === "student") {
      return data?.filter((exam) => exam.classLevel === profile.classLevel);
    }
    return data;
  };

  return (
    <CustomContainer>
      <SectionHeader
        title="Exams"
        par="Take your available exams and test your knowledge."
      />
      {isLoading ? (
        <LoaderPage />
      ) : error ? (
        <ErrorPage fetchErr={error} />
      ) : (
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(380px,1fr))]">
          {examsByClassLevel().map((exam) => (
            <ExamsCard exam={exam} key={exam.id} />
          ))}
        </div>
      )}
    </CustomContainer>
  );
}
