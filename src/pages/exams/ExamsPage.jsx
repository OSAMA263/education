import { useState } from "react";
import { useGetAllExams } from "@/hooks/useExams";
import CustomContainer from "../../components/layout/CustomContainer";
import SectionHeader from "../../components/shared/SectionHeader";
import ExamsCard from "./ExamsCard";
import LoaderPage from "../LoaderPage";
import ErrorPage from "../ErrorPage";
import { useAuthData } from "@/routes/AuthProvider";
import SEOWrapper from "@/components/layout/SEOWrapper";
import { Button } from "@chakra-ui/react";

export default function ExamsPage() {
  const { data, isLoading, error } = useGetAllExams();
  const { profile } = useAuthData();
  const [visibleCount, setVisibleCount] = useState(9);

  const examsByClassLevel = () => {
    if (profile?.role === "student") {
      return data?.filter((exam) => exam.classLevel === profile.classLevel);
    }
    return data;
  };

  const exams = examsByClassLevel() || [];
  const visibleExams = exams.slice(0, visibleCount);
  const hasMore = visibleCount < exams.length;

  return (
    <SEOWrapper
      des="Test your knowledge with a variety of online exams and quizzes designed to challenge your understanding and boost your skills."
      link="exams"
      title="Exams"
    >
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
          <>
            <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(380px,1fr))]">
              {visibleExams.map((exam) => (
                <ExamsCard exam={exam} key={exam.id} />
              ))}
            </div>
            {hasMore && (
              <div className="flex justify-center">
                <Button
                  rounded="xl"
                  variant="surface"
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                >
                  Load more
                </Button>
              </div>
            )}
          </>
        )}
      </CustomContainer>
    </SEOWrapper>
  );
}