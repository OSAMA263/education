import { useEffect, useState } from "react";
import { useGetAllExams } from "@/hooks/useExams";
import CustomContainer from "../../components/layout/CustomContainer";
import SectionHeader from "../../components/shared/SectionHeader";
import ExamsCard from "./ExamsCard";
import LoaderPage from "../LoaderPage";
import ErrorPage from "../ErrorPage";
import { useAuthData } from "@/routes/AuthProvider";
import SEOWrapper from "@/components/layout/SEOWrapper";
import { Button } from "@chakra-ui/react";
import SearchFilterItems from "@/components/SearchFilterItems";

export default function ExamsPage() {
  const { data, isLoading, error } = useGetAllExams();
  const { profile } = useAuthData();
  const [visibleCount, setVisibleCount] = useState(9);
  const [visibleExams, setVisibleExams] = useState([]);

  const examsByClassLevel = () => {
    if (profile?.role === "student") {
      return data?.filter(
        (exam) => exam.classLevel === profile.classLevel,
      );
    }
    return data;
  };

  useEffect(() => {
    if (!data) return;
    setVisibleExams(examsByClassLevel());
  }, [data, profile]);

  return (
    <SEOWrapper
      des="Test your knowledge with a variety of online exams and quizzes designed to challenge your understanding and boost your skills."
      link="exams"
      title="Exams"
    >
      <CustomContainer>
        <SectionHeader
          title="Exams"
          className="mb-4!"
          par="Take your available exams and test your knowledge."
        />
        {isLoading ? (
          <LoaderPage />
        ) : error ? (
          <ErrorPage fetchErr={error} />
        ) : (
          <>
            <SearchFilterItems
              allData={examsByClassLevel()}
              visibleData={setVisibleExams}
            />
            <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(380px,1fr))]">
              {visibleExams.length == 0 ? (
                <span className="text-center text-white/40">No title was found</span>
              ) : (
                visibleExams
                  .slice(0, visibleCount)
                  .map((exam) => (
                    <ExamsCard exam={exam} key={exam.id} />
                  ))
              )}
            </div>
            {visibleCount <= examsByClassLevel().length && (
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
