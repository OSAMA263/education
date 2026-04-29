import Modal from "@/components/Modal";
import { useGetAllExams } from "@/hooks/useExams";
import { useAuthData } from "@/routes/AuthProvider";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ExamsSubmited() {
  const [open, setOpen] = useState(false);
  const { profile } = useAuthData();
  const { data, isLoading } = useGetAllExams();

  return (
    <Modal title="Exams you took" openModalContent="Exams Submitted" {...{ open, setOpen }}>
      <div className="flex flex-col gap-2">
        {isLoading ? (
          <span>loading</span>
        ) : (
          data
            ?.filter((exam) =>
              profile?.exams?.some(({ id }) => id == exam.id),
            )
            .map((exam) => (
              <Link
                className="underline text-blue-800 hover:text-blue-200"
                to={`/exams/${exam.id}`}
                key={exam.id}
              >
                {exam.title}
              </Link>
            ))
        )}
      </div>
    </Modal>
  );
}
