import { Button, Group } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import QuestionModal from "./QuestionModal";
import { toast } from "@/utils/utils";
import { FaDeleteLeft } from "react-icons/fa6";

export default function ExamModal({ examData, setExamData }) {
  const hasNoQuesitons = examData?.questions?.some((q) => q.question == null);

  const addQuestion = () => {
    if (examData?.questions?.length < 7 || !examData?.questions) {
      setExamData((prev) => {
        const questions = prev?.questions || [];
        return {
          ...prev,
          questions: [...questions, { id: crypto.randomUUID() }],
        };
      });
    } else {
      toast("error", "E", "7 questions are enough dude");
    }
  };

  const deleteQuesiton = (quesitonId) => {
    setExamData((prev) => ({
      ...prev,
      questions: [...prev.questions.filter((q) => q.id !== quesitonId)],
    }));
  };

  return (
    <div>
      <div className="w-full flex items-center justify-between mb-2">
        <h1 className="font-semibold md:text-lg">Questions</h1>
        <Button size={"sm"} variant="outline" onClick={addQuestion}>
          Add <FaPlus />
        </Button>
      </div>
      {/* render the questions */}
      {examData?.questions?.map((question, i) => (
        <div key={i} className="w-full flex items-center">
          <div className="w-full">
            <QuestionModal key={i} data={question} setExamData={setExamData} />
          </div>

          <Button
            onClick={() => deleteQuesiton(question.id)}
            className="!px-0 h-full"
            variant={"outline"}
            colorPalette={"red"}
          >
            <FaDeleteLeft />
          </Button>
        </div>
      ))}
      {(examData?.questions?.length == 0 ||
        !examData?.questions ||
        hasNoQuesitons) && (
        <span className="text-red-400">All questions must be valid</span>
      )}
    </div>
  );
}
