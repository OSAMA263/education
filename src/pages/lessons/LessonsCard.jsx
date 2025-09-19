import { Button } from "@chakra-ui/react";
import Card from "@/components/Card";
import { Link } from "react-router-dom";
import { isAvailable } from "@/utils/utils";
import { useGetLessonById } from "@/hooks/useLessons";
import PayLesson from "./single page/PayLesson";
import { useState } from "react";

export default function LessonsCard({ data }) {
  const { _id, title, classLevel, scheduledDate, description, isPaid, price } =
    data;
  const availableDate = new Date(scheduledDate).toLocaleString();

  return (
    <Card
      {...{ description, classLevel, title, availableDate }}
      className="space-y-10 justify-between"
    >
      {/* price  */}
      <div className="grid grid-cols-2 items-center gap-4">
        <h1 className="font-semibold text-lg">
          {isPaid && `EGP ${price.toFixed(2)}`}
        </h1>

        {/* view lesson  */}
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
  // buy the lessons modal handler
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
