import PlainCard from "@/components/PlainCard";
import { Badge, Button } from "@chakra-ui/react";
import { useState } from "react";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import SelectAnswers from "./SelectAnswers";
import { useGetQuesitonById } from "@/hooks/useQuesiton";
import ErrorPage from "@/pages/ErrorPage";
import LoaderPage from "@/pages/LoaderPage";
import { useSubmitExam } from "@/hooks/useExams";
import Modal from "@/components/Modal";
import Countdown from "react-countdown";

export default function AnsweringExamQuesitons({
  questions,
  _id,
  initialTime,
}) {

  const [currQuestion, setCurrQuestion] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [open, setOpen] = useState(false);

  const { mutate, isPending } = useSubmitExam(_id);
  const { data, isLoading, error } = useGetQuesitonById(
    questions[currQuestion - 1]._id
  );

  const mutationFn = () => {
    mutate(answers, {
      onSuccess: () => {
        window.location.reload();
      },
    });
  };

  const handleSubmitExam = () => {
    if (questions.length !== answers.length) {
      setOpen(true);
    } else {
      mutationFn();
    }
  };

  function handleTimeRunsOut() {
    if (answers.length > 0) {
      mutationFn();
    } else {
      window.location.reload();
    }
  }

  return (
    <>
      <PlainCard className="w-[80%] mx-auto flex flex-col gap-12">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-lg">Question: {currQuestion}</h1>
          <Badge size={"lg"}>
            {currQuestion} of {questions.length}
          </Badge>
        </div>

        {/* question and answers options */}
        {isLoading ? (
          <LoaderPage className="!min-h-fit" />
        ) : error ? (
          <ErrorPage className="!min-h-fit" fetchErr={error} />
        ) : (
          <SelectAnswers data={data?.data} {...{ answers, setAnswers }} />
        )}
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
          {answers.length}/{questions.length} Answered
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
        className="!flex !justify-self-center"
      >
        Submit Exam
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
      <Countdown
        date={Date.now() + initialTime}
        onComplete={() => handleTimeRunsOut()}
        renderer={() => null}
      />
    </>
  );
}
