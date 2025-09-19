import Modal from "@/components/Modal";

export default function ScoreModal({ open, setOpen, score, examData }) {
  return (
    <Modal
      title="Your score"
      {...{ open, setOpen }}
      openBtnClasses="!w-fit !p-2 !place-self-center"
      btnVariant={"surface"}
      openModalContent="Show score"
    >
      <p>
        You have answered{" "}
        <span className="font-bold">
          (
          <span
            className={
              score?.data?.score >= examData.questions.length / 2
                ? "text-green-500"
                : "text-red-500"
            }
          >
            {score?.data?.score}
          </span>{" "}
          out of{" "}
          <span className="text-gray-400">{examData.questions.length}</span>)
        </span>{" "}
        questions correctly
      </p>
    </Modal>
  );
}
