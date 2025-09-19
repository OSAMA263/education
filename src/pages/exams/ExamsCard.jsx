import { Button } from "@chakra-ui/react";
import Card from "../../components/Card";
import { isAvailable } from "@/utils/utils";
import { FaRegQuestionCircle, FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ExamsCard({ exam }) {
  const {
    classLevel,
    description,
    title,
    questions,
    startDate,
    endDate,
    duration,
    _id,
  } = exam;

  const availableDate = new Date(startDate).toLocaleDateString("en-GB");
  const expriedDate = new Date(endDate).toLocaleDateString("en-GB");

  return (
    <Card {...{ description, classLevel, title, availableDate, expriedDate }}>
      {/* exam details */}
      <div className="space-x-4 flex gap-2 [&>h1]:flex [&>h1]:items-center [&>h1]:gap-2">
        <h1>
          <span>
            <FaRegClock />
          </span>
          <span>{duration} minutes</span>
        </h1>
        <h1>
          <span>
            <FaRegQuestionCircle />
          </span>
          <span>{questions.length} question</span>
        </h1>
      </div>

      <div className="flex justify-end">
        <ExamsActionBtn {...{ endDate, startDate, _id }} />
      </div>
    </Card>
  );
}

const ExamsActionBtn = ({ endDate, startDate, _id }) => {
  const expired = isAvailable(endDate);
  const available = isAvailable(startDate) && !expired;

  return (
    <Button
      asChild={available}
      rounded={"xl"}
      variant={"surface"}
      disabled={expired || !available}
    >
      {expired ? (
        "Expired"
      ) : available ? (
        <Link to={`/exams/${_id}`}>Take Exam</Link>
      ) : (
        "Not available yet"
      )}
    </Button>
  );
};
