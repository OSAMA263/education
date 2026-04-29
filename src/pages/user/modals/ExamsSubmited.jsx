import Modal from "@/components/Modal";
import { useGetAllExams } from "@/hooks/useExams";
import { useAuthData } from "@/routes/AuthProvider";
import { useState } from "react";

export default function ExamsSubmited() {
  const [open, setOpen] = useState(false);
  const { profile } = useAuthData();
  const { data, isLoading } = useGetAllExams();

  console.log(data.filter((item)=>{
    profile.exams.map(exam=>exam)
  }));
  return (
    <Modal
      openModalContent="Exams Submitted"
      {...{ open, setOpen }}
    ></Modal>
  );
}
