import Modal from "@/components/Modal";
import { useGetExamScore } from "@/hooks/useExams";

export default function ScoreModal({ open, setOpen, examData }) {
  const { data } = useGetExamScore(examData?._id);
  const examPoints = examData?.questions.reduce(
    (total, q) => total + (q.points || 0),
    0
  );

  return (
    <Modal
      title="Your score"
      {...{ open, setOpen }}
      openBtnClasses="!w-fit !p-2 !place-self-center"
      btnVariant={"surface"}
      openModalContent="Show score"
    >
      <p>
        You have scored{" "}
        <span className="font-bold">
          (
          <span
            className={
              data?.data?.score >= examPoints / 2
                ? "text-green-500"
                : "text-red-500"
            }
          >
            {data?.data?.score}
          </span>{" "}
          out of <span className="text-gray-400">{examPoints} points</span>)
        </span>
        , in this exam.
      </p>
    </Modal>
  );
}
