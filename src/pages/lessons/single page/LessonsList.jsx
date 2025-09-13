import { getLessonByIdRequest } from "@/api/LessonsAPI";
import Loader from "@/components/Loader";
import { useGetAllLessons } from "@/hooks/useLessons";
import { Button } from "@chakra-ui/react";
import { useQueries } from "@tanstack/react-query";
import { FaPlay } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

export default function LessonsList() {
  const { lessonId } = useParams();
  const { data } = useGetAllLessons();

  // custom shitter doesnt belong here or anywhere just cuz the api is shit
  const lessonsOwned = useQueries({
    queries:
      data?.data.map((lesson) => ({
        queryKey: ["lesson-details", lesson._id],
        queryFn: () => getLessonByIdRequest(lesson._id),
        enabled: !!data?.data,
        staleTime: 15 * 60 * 1000,
        retry: false,
      })) || [],
  });
  const loading = lessonsOwned.some((lesson) => lesson.isLoading);

  const filteredLessons = lessonsOwned
    .filter((lesson) => !lesson.isError && lesson?.data)
    .map((item) => item.data.data);

  return (
    <div className="rounded-xl border-secondary/40 border bg-bg-gray/50 overflow-hidden h-full">
      <h1 className="p-4 text-center font-bold bg-bg-gray">Lessons Owned</h1>
      {/* lessons */}
      <div>
        {loading ? (
          <div className="mt-20">
            <Loader />
          </div>
        ) : (
          filteredLessons.map(({ title, _id }) => (
            <Button asChild
              key={_id}
              variant={lessonId === _id ? "solid" : "outline"}
              className="w-full !justify-between !py-6"
            >
              <Link to={"/lessons/" + _id}>
                <FaPlay className="p-[1px]" /> {title}
              </Link>
            </Button>
          ))
        )}
      </div>
    </div>
  );
}
