import { useGetAllLessons } from "@/hooks/useLessons";
import CustomContainer from "../../components/layout/CustomContainer";
import SectionHeader from "../../components/shared/SectionHeader";
import LessonsCard from "./LessonsCard";
import LoaderPage from "../LoaderPage";
import ErrorPage from "../ErrorPage";

export default function LessonsPage() {
  const { data, isLoading, error } = useGetAllLessons();

  return (
    <CustomContainer>
      <SectionHeader
        title="Lessons"
        par="Explore our wide range of courses designed to help you learn and grow."
      />
      {isLoading ? (
        <LoaderPage />
      ) : error ? (
        <ErrorPage message={error} />
      ) : (
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(380px,1fr))]">
          {data?.data.map((lessonData) => (
            <LessonsCard data={lessonData} key={lessonData._id} />
          ))}
        </div>
      )}
    </CustomContainer>
  );
}
