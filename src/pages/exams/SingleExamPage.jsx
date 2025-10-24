import { useGetExamById, useStartExam } from "@/hooks/useExams";
import { useExamStatus } from "@/utils/utils";
import { useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import { Button } from "@chakra-ui/react";
import LoaderPage from "../LoaderPage";
import CustomContainer from "@/components/layout/CustomContainer";
import { useEffect, useState } from "react";
import ExamDetails from "./ExamDetails";
import StartExam from "./StartExam";
import { useAuthData } from "@/routes/AuthProvider";
import SEOWrapper from "@/components/layout/SEOWrapper";

export default function SingleExamPage() {
  const { profile } = useAuthData();
  const { examId } = useParams();

  const { mutate, isPending } = useStartExam(profile?.id);
  const { data: examData, isLoading, error } = useGetExamById(examId);

  const { examInProgress, expired, available, btnText, expiresAt } =
    useExamStatus(examId, examData);

  const [examStart, setExamStart] = useState(false);

  // update tab title
  useEffect(() => {
    document.title = `Exmas-${examId}`;
  }, [examId]);

  if (isLoading) return <LoaderPage />;
  if (error) return <ErrorPage />;

  // start exam funcinality
  const handleStartExam = () => {
    if (!examInProgress) {
      mutate(examId);
    }
    setExamStart(true);
  };

  return (
    <SEOWrapper
      des="Take this exam to test your knowledge and see how well you’ve mastered the lessons. Review your results and track your progress."
      link={`exams/${examId}`}
    >
      <CustomContainer xl="55%" className="!space-y-14">
        <h1 className="font-semibold text-3xl text-center">
          {examStart ? examData?.title : "Exam Details"}
        </h1>
        {examStart ? (
          <StartExam
            setExamStart={setExamStart}
            examData={examData}
            endTime={expiresAt}
            submitted={examInProgress?.isSubmitted}
          />
        ) : (
          <>
            <ExamDetails examData={examData} />
            {/* start exam btn */}
            <Button
              variant={"surface"}
              colorPalette={expired || !available ? "gray" : "blue"}
              className="!w-fit place-self-center"
              onClick={handleStartExam}
              loading={isPending}
              disabled={expired || !available}
            >
              {btnText}
            </Button>
          </>
        )}
      </CustomContainer>
    </SEOWrapper>
  );
}
