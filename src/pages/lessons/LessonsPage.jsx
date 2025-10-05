import { useGetAllLessons } from "@/hooks/useLessons";
import CustomContainer from "../../components/layout/CustomContainer";
import SectionHeader from "../../components/shared/SectionHeader";
import LessonsCard from "./LessonsCard";
import LoaderPage from "../LoaderPage";
import ErrorPage from "../ErrorPage";
import { useAuthData } from "@/routes/AuthProvider";

export default function LessonsPage() {
  const { data, isLoading, error } = useGetAllLessons();
  const { profile } = useAuthData();

  if (error) return <ErrorPage message={error} />;

  return (
    <CustomContainer>
      <SectionHeader
        title="Lessons"
        par="Explore our wide range of courses designed to help you learn and grow."
      />
      {isLoading ? (
        <LoaderPage />
      ) : (
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(380px,1fr))]">
          {data
            ?.filter((lesson) => lesson.classLevel === profile?.classLevel)
            .map((lessonData) => (
              <LessonsCard data={lessonData} key={lessonData.id} />
            ))}
        </div>
      )}
    </CustomContainer>
  );
}
