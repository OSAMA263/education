import { Button } from "@chakra-ui/react";
import Card from "@/components/Card";
import { Link } from "react-router-dom";
import { isAvailable } from "@/utils/utils";
import PayLesson from "./single page/PayLesson";
import { useState } from "react";
import { useAuthData } from "@/routes/AuthProvider";

export default function LessonsCard({ data }) {
  const { id, title, classLevel, startDate, description, price } =
    data;
  const availableDate = new Date(startDate).toLocaleString();

  return (
    <Card exam={data} className="space-y-10 justify-between">
      {/* price  */}
      <div className="grid grid-cols-2 items-center gap-4">
        <h1 className="font-semibold text-lg">
          {price > 0 && `EGP ${price.toFixed(2)}`}
        </h1>

        {/* view lesson  */}
        <LessonBtnAction {...{ id, startDate, price }} />
      </div>
    </Card>
  );
}

const LessonBtnAction = ({ id, startDate, price }) => {
  const available = isAvailable(startDate);
  const { profile } = useAuthData();

  // buy the lessons modal handler
  const [open, setOpen] = useState(false);

  // chekcif the lesson isnt payed and the lesson isnst free
  if (price !== 0 && !(profile?.lessons || []).includes(id)) {
    return (
      <PayLesson {...{ open, setOpen, id, userId: profile?.id }} />
    );
  }

  return (
    <Button
      colorPalette={price > 0 ? "blackAlpha" : "blue"}
      rounded={"xl"}
      variant={"surface"}
      disabled={!available}
      p={0}
    >
      {available ? (
        <Link
          className="flex justify-center items-center w-full h-full"
          to={`/lessons/${id}`}
        >
          {price > 0 ? "Watch lesson" : "Free to watch"}
        </Link>
      ) : (
        "Not available yet"
      )}
    </Button>
  );
};
