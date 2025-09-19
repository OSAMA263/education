import Loader from "@/components/Loader";
import { useUserLessons } from "@/routes/LessonsProvider";
import { Button } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

export default function LessonsList() {
  const { lessonId } = useParams();
  const { lessonsOwned, isLoading } = useUserLessons();

  return (
    <div className="rounded-xl border-secondary/40 border bg-bg-gray/50 overflow-hidden h-full">
      <h1 className="p-4 text-center font-bold bg-bg-gray">Lessons Owned</h1>
      {/* lessons */}
      <div>
        {isLoading ? (
          <div className="mt-10">
            <Loader />
          </div>
        ) : (
          lessonsOwned.map(({ title, _id }) => (
            <Button
              asChild
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
