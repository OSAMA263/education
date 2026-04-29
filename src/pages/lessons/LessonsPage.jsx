import { useEffect, useState } from "react";
import { useGetAllLessons } from "@/hooks/useLessons";
import CustomContainer from "../../components/layout/CustomContainer";
import SectionHeader from "../../components/shared/SectionHeader";
import LessonsCard from "./LessonsCard";
import LoaderPage from "../LoaderPage";
import ErrorPage from "../ErrorPage";
import { useAuthData } from "@/routes/AuthProvider";
import SEOWrapper from "@/components/layout/SEOWrapper";
import { Button } from "@chakra-ui/react";
import SearchFilterItems from "@/components/SearchFilterItems";

export default function LessonsPage() {
  const { data, isLoading, error } = useGetAllLessons();
  const { profile } = useAuthData();
  const [visibleCount, setVisibleCount] = useState(9);
  const [visibleLessons, setVisibleLessons] = useState([]);

  const lessonsByClassLevel = () => {
    if (profile?.role === "student") {
      return data?.filter(
        (lesson) => lesson.classLevel === profile?.classLevel
      );
    }
    return data;
  };

  useEffect(() => {
    if (!data) return;
    setVisibleLessons(lessonsByClassLevel());
  }, [data, profile]);

  if (error) return <ErrorPage message={error} />;

  return (
    <SEOWrapper
      des="Access step-by-step lessons that make learning easy, fun, and effective across multiple subjects and skill levels."
      link="lessons"
      title="Lessons"
    >
      <CustomContainer>
        <SectionHeader
          title="Lessons"
          className="mb-4!"
          par="Explore our wide range of courses designed to help you learn and grow."
        />
        {isLoading ? (
          <LoaderPage />
        ) : (
          <>
            <SearchFilterItems
              allData={lessonsByClassLevel()}
              visibleData={setVisibleLessons}
            />
            <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(380px,1fr))]">
              {visibleLessons.length === 0 ? (
                <span className="text-center text-white/40">No title was found</span>
              ) : (
                visibleLessons.slice(0, visibleCount).map((lesson) => (
                  <LessonsCard data={lesson} key={lesson.id} />
                ))
              )}
            </div>
            {visibleCount <= lessonsByClassLevel()?.length && (
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