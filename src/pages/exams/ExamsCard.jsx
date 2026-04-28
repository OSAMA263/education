import { Button } from "@chakra-ui/react";
import Card from "../../components/Card";
import { isAvailable, useExamStatus } from "@/utils/utils";
import { FaQuestionCircle, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuthData } from "@/routes/AuthProvider";
import { useSubmitExam } from "@/hooks/useExams";

export default function ExamsCard({ exam }) {
  return (
    <Card exam={exam}>
      {/* exam details */}
      <div className="space-x-4 [&_svg]:text-lg flex gap-2 [&>h1]:flex [&>h1]:items-center [&>h1]:gap-2">
        <h1>
          <span>
            <FaClock />
          </span>
          <span>{exam?.duration} minutes</span>
        </h1>
        <h1>
          <span>
            <FaQuestionCircle />
          </span>
          <span>{exam?.questions.length} question</span>
        </h1>
      </div>
      <div className="flex justify-end">
        <ExamsActionBtn exam={exam} />
      </div>
    </Card>
  );
}

const ExamsActionBtn = ({ exam }) => {
  const { profile } = useAuthData();
  const { available, expired, examInProgress, timesUp } =
    useExamStatus(exam?.id, exam);
  const { mutate, isPending } = useSubmitExam(exam?.id);

  const examBtnText = () => {
    if (expired) return "Expired";
    if (!available) return "Not available yet";
    if (examInProgress) {
      return timesUp || examInProgress?.isSubmitted
        ? "Submitted"
        : "Continue exam";
    }
    return "Take exam";
  };

  const checkExamValidation = () => {
    if (timesUp && !examInProgress?.isSubmitted) {
      mutate({ answers: [], userId: profile?.id });
    }
  };

  return (
    <Button
      asChild={available}
      rounded={"xl"}
      variant={"surface"}
      colorPalette={
        expired || !available
          ? "blackAlpha"
          : examBtnText() === "Take exam"
            ? "blue"
            : "bg"
      }
      loading={isPending}
      disabled={expired || !available}
      onClick={checkExamValidation}
    >
      {available ? (
        <Link to={`/exams/${exam?.id}`}>{examBtnText()}</Link>
      ) : (
        examBtnText()
      )}
    </Button>
  );
};
