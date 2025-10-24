import { useGetAllLessons } from "@/hooks/useLessons";
import CustomContainer from "../../components/layout/CustomContainer";
import SectionHeader from "../../components/shared/SectionHeader";
import LessonsCard from "./LessonsCard";
import LoaderPage from "../LoaderPage";
import ErrorPage from "../ErrorPage";
import { useAuthData } from "@/routes/AuthProvider";
import SEOWrapper from "@/components/layout/SEOWrapper";

export default function LessonsPage() {
  const { data, isLoading, error } = useGetAllLessons();
  const { profile } = useAuthData();

  if (error) return <ErrorPage message={error} />;

  const lessonsByClassLevel = () => {
    if (profile?.role === "student") {
      return data?.filter(
        (lesson) => lesson.classLevel === profile?.classLevel
      );
    }

    return data;
  };

  return (
    <SEOWrapper
      des="Access step-by-step lessons that make learning easy, fun, and effective across multiple subjects and skill levels."
      link="lessons"
      title="Lessons"
    >
      <CustomContainer>
        <SectionHeader
          title="Lessons"
          par="Explore our wide range of courses designed to help you learn and grow."
        />
        {isLoading ? (
          <LoaderPage />
        ) : (
          <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(380px,1fr))]">
            {lessonsByClassLevel().map((lessonData) => (
              <LessonsCard data={lessonData} key={lessonData.id} />
            ))}
          </div>
        )}
      </CustomContainer>
    </SEOWrapper>
  );
}
