import {
  useGetExamById,
  useGetRemainTime,
  useStartExam,
} from "@/hooks/useExams";
import { isAvailable, useExamStatus } from "@/utils/utils";
import { Link, useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import { Button } from "@chakra-ui/react";
import LoaderPage from "../LoaderPage";
import CustomContainer from "@/components/layout/CustomContainer";
import { useState } from "react";
import ExamDetails from "./ExamDetails";
import StartExam from "./StartExam";
import ScoreModal from "./start-exam/ScoreModal";

export default function SingleExamPage() {
  const [open, setOpen] = useState(false);
  const { examId } = useParams();
  const { data, error: examErr } = useGetRemainTime(examId);

  const { mutate, isPending } = useStartExam();

  const {
    isDisabled,
    buttonText,
    isLoading: btnLoading,
  } = useExamStatus(examId);

  const { data: examDetails, isLoading, error } = useGetExamById(examId);
  const examData = examDetails?.data;

  const [examStart, setExamStart] = useState(false);

  // handle ui if a dumbass took a not available examid and paste it in the url
  const expired = isAvailable(examData?.endDate);
  const available = isAvailable(examData?.startDate) && !expired;

  if (isLoading) return <LoaderPage />;
  if (error || expired || !available) return <ExamStatus />;

  // start exam funcinality
  const handleStartExam = () => {
    mutate(examId, {
      onSuccess: () => {
        setExamStart(true);
      },
    });
  };

  return (
    <CustomContainer xl="55%" className="!space-y-14">
      <h1 className="font-semibold text-3xl text-center">
        Exam {examStart ? "Questions" : "Details"}
      </h1>
      {examStart ? (
        <StartExam examData={examData} />
      ) : (
        <>
          <ExamDetails examData={examData} />
          {data?.message === "Time is up" ||
          examErr?.response.status === 400 ? (
            // show score modal
            <ScoreModal {...{ open, setOpen, examData }} />
          ) : (
            // {/* start exam btn */}
            <Button
              variant={"surface"}
              colorPalette={"blue"}
              className="!w-fit place-self-center"
              onClick={handleStartExam}
              loading={btnLoading || isPending}
              disabled={isDisabled}
            >
              {buttonText}
            </Button>
          )}
        </>
      )}
    </CustomContainer>
  );
}

// if the exam is expired or not yet available
const ExamStatus = () => {
  return (
    <ErrorPage fetchErr>
      <p className="text-secondary">
        THIS EXAM HAS EXPIRED OR IS NOT AVAILABLE FOR YOU
      </p>
      <Button rounded={"full"} asChild>
        <Link to={"/exams"}>Go Back</Link>
      </Button>
    </ErrorPage>
  );
};
