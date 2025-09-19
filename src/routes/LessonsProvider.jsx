import { getLessonByIdRequest } from "@/api/LessonsAPI";
import { useGetAllLessons } from "@/hooks/useLessons";
import { useQueries } from "@tanstack/react-query";
import { createContext, useContext } from "react";

const LessonsContext = createContext();

export default function LessonsProvider({ children }) {
  const { data: allLessons, isLoading } = useGetAllLessons();

  // get the lessons user bought
  const lessonsOwned = useQueries({
    queries:
      allLessons?.data.map((lesson) => ({
        queryKey: ["lesson-details", lesson._id],
        queryFn: () => getLessonByIdRequest(lesson._id),
        enabled: !!allLessons?.data,
        staleTime: 15 * 60 * 1000,
        retry: false,
      })) || [],
  })
    .filter((lesson) => !lesson.isError && lesson?.data)
    .map((item) => item.data.data);

  return (
    <LessonsContext.Provider value={{ lessonsOwned, isLoading }}>
      {children}
    </LessonsContext.Provider>
  );
}

export const useUserLessons = () => useContext(LessonsContext);
