import { Button } from "@chakra-ui/react";
import Card from "@/components/Card";
import { FaRegCalendarAlt, FaGraduationCap, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { isAvailable } from "@/utils/utils";
import { useGetLessonById } from "@/hooks/useLessons";
import PayLesson from "./single page/PayLesson";
import { useState } from "react";

export default function LessonsCard({ data }) {
  const { _id, title, classLevel, scheduledDate, description, isPaid, price } =
    data;
  const lessonDate = new Date(scheduledDate).toLocaleString();

  return (
    <Card className="space-y-10 justify-between">
      {/* available date*/}
      <div className="flex gap-4 items-center text-secondary">
        <FaRegCalendarAlt />
        <p>Scheduled: {lessonDate}</p>
      </div>

      {/* title & des */}
      <div className="[&>p]:text-secondary [&>p]:text-sm">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="flex items-center gap-1">
          <FaGraduationCap /> {classLevel}
        </p>
        <p className="mt-4">{description}</p>
      </div>

      {/* price + buy btn */}
      <div className="grid grid-cols-2 items-center gap-4">
        <h1 className="font-semibold text-lg">
          {isPaid && `EGP ${price.toFixed(2)}`}
        </h1>
        <LessonBtnAction {...{ _id, isPaid, scheduledDate }} />
      </div>
    </Card>
  );
}

const LessonBtnAction = ({ _id, isPaid, scheduledDate }) => {
  const available = isAvailable(scheduledDate);

  const { error, isLoading } = useGetLessonById(_id, {
    enabled: available,
  });
  // buy the lessons handler
  const [open, setOpen] = useState(false);

  if (error) return <PayLesson {...{ open, setOpen, lessonId: _id }} />;

  return (
    <Button
      colorPalette={isPaid ? "blackAlpha" : "blue"}
      rounded={"xl"}
      variant={"surface"}
      disabled={!available}
      loading={isLoading}
      p={0}
    >
      {available ? (
        <Link
          className="flex justify-center items-center w-full h-full"
          to={`/lessons/${_id}`}
        >
          Watch lesson
        </Link>
      ) : (
        "Not available yet"
      )}
    </Button>
  );
};
