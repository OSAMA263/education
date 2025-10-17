import Loader from "@/components/Loader";
import { useGetAllLessons } from "@/hooks/useLessons";
import { useGetUserLessons } from "@/hooks/useUser";
import { useAuthData } from "@/routes/AuthProvider";
import { isAvailable } from "@/utils/utils";
import { Button } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

export default function LessonsList() {
  const { lessonId } = useParams();
  const { profile } = useAuthData();
  const { data: allLessons, isLoading } = useGetAllLessons();
  const { data, isLoading: lo } = useGetUserLessons(profile?.id);

  const studentLessons = allLessons?.filter(
    (lesson) =>
      ((lesson.price === 0 && lesson.classLevel === profile?.classLevel) ||
        data?.includes(lesson.id)) &&
      isAvailable(lesson.startDate)
  );

  return (
    <div className="rounded-xl border-secondary/40 border bg-bg-gray overflow-hidden h-full">
      <h1 className="p-4 text-center font-bold bg-bg-gray">Lessons Owned</h1>
      {/* lessons */}
      <div>
        {isLoading || lo ? (
          <div className="mt-10">
            <Loader />
          </div>
        ) : (
          studentLessons.map(({ title, id }) => (
            <Button
              asChild
              key={id}
              variant={lessonId == id ? "solid" : "outline"}
              className="w-full !justify-between !py-6"
            >
              <Link to={`/lessons/${id}`}>
                <FaPlay className="p-[1px]" /> {title}
              </Link>
            </Button>
          ))
        )}
      </div>
    </div>
  );
}
