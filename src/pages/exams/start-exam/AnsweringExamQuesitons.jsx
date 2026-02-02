import PlainCard from "@/components/PlainCard";
import { Badge, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import SelectAnswers from "./SelectAnswers";
import { useSubmitExam } from "@/hooks/useExams";
import Modal from "@/components/Modal";
import { useAuthData } from "@/routes/AuthProvider";
import { toast, useExamStatus } from "@/utils/utils";
import Timer from "@/components/Timer";

export default function AnsweringExamQuesitons({
  questions,
  id,
  endTime,
  setExamStart,
}) {
  const { profile } = useAuthData();
  const { examInProgress } = useExamStatus(id);

  const [currQuestion, setCurrQuestion] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [open, setOpen] = useState(false);

  const { mutate, isPending } = useSubmitExam(id);

  const mutationFn = () => {
    if (!examInProgress?.isSubmitted) {
      mutate(
        { answers, userId: profile?.id },
        {
          onSuccess: () => {
            setOpen(false);
            setExamStart(false);
          },
        }
      );
    }
  };

  const handleSubmitExam = () => {
    if (examInProgress?.isSubmitted)
      return toast("error", "ee", "Exam already submitted");
    if (questions.length !== answers.length) {
      setOpen(true);
    } else {
      mutationFn();
    }
  };

  // set the selected answers for the score
  useEffect(() => {
    if (examInProgress?.isSubmitted) {
      setAnswers(examInProgress.answers);
    }
  }, []);

  const TotalCorrectAnswers =
    answers.length > 0 &&
    answers.filter((ans) => {
      const question = questions.find((q) => q.id === ans.id);
      return question && ans.answer === question.correctAnswer;
    });

  return (
    <>
      <PlainCard className="sm:w-[80%] mx-auto flex flex-col gap-12">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-lg">Question: {currQuestion}</h1>
          <Badge size={"lg"}>
            {currQuestion} of {questions.length}
          </Badge>
        </div>

        {/* question and answers options */}
        <SelectAnswers
          data={questions}
          submitted={examInProgress?.isSubmitted}
          {...{ answers, setAnswers, currQuestion }}
        />
      </PlainCard>

      {/* questions controls */}
      <PlainCard className="flex items-center justify-between">
        <Button
          onClick={() => setCurrQuestion((prev) => prev - 1)}
          disabled={currQuestion === 1}
          variant={"surface"}
        >
          <IoMdArrowDropleft />
          Previous
        </Button>
        <Badge size={"lg"}>
          {examInProgress?.isSubmitted
            ? TotalCorrectAnswers.length
            : answers.length}
          /{questions.length}{" "}
          {examInProgress?.isSubmitted
            ? "Correct answers"
            : "Answered questions"}
        </Badge>
        <Button
          onClick={() => setCurrQuestion((prev) => prev + 1)}
          disabled={currQuestion === questions.length}
          variant={"surface"}
        >
          Next <IoMdArrowDropright />
        </Button>
      </PlainCard>

      {/* submit exam btn */}
      <Button
        onClick={handleSubmitExam}
        variant={"outline"}
        colorPalette={"blue"}
        loading={isPending}
        disabled={examInProgress?.isSubmitted}
        className="!flex !justify-self-center"
      >
        {examInProgress?.isSubmitted ? "Submitted" : "Submit Exam"}
      </Button>
      <Modal
        openBtnClasses="!hidden"
        title="Not all questions are Answered"
        {...{ open, setOpen }}
      >
        <p>Are you sure you want to submit the exam anyway?</p>
        <div className="mt-8 space-x-4">
          <Button
            onClick={() => mutationFn()}
            variant={"outline"}
            loading={isPending}
          >
            Submit exam
          </Button>
          <Button
            onClick={() => setOpen(false)}
            variant={"outline"}
            colorPalette={"red"}
          >
            Continue answering
          </Button>
        </div>
      </Modal>

      {/* asuto submit when times run out */}
      <Timer
        onComplete={() => mutationFn()}
        endTime={endTime}
        renderNull={true}
      />
    </>
  );
}
