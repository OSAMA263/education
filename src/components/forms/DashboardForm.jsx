import { examsInputs, lessonsInputs } from "@/pages/dashboard/inputs_data";
import AuthForm from "./AuthForm";
import { useAuthData } from "@/routes/AuthProvider";
import { dataDefaultVals } from "@/utils/utils";
import { useContext, useState } from "react";
import { DashboardContext } from "@/routes/DashboardProvider";
import { examSchema, lessonSchema } from "@/validations/Dashboard";
import { useAddLesson, useUpdateLesson } from "@/hooks/useLessons";
import ExamModal from "@/pages/dashboard/modals/ExamModal";
import { useAddExam, useUpdateExam } from "@/hooks/useExams";

export default function DashboardForm({ dataType, setOpen }) {
  const { selectedItem } = useContext(DashboardContext);
  const { profile } = useAuthData();
  const [examData, setExamData] = useState(selectedItem);

  // mutaiton funcitons for exam or lessons
  const { mutate: addLesson, isPending: loadA } = useAddLesson(setOpen);
  const { mutate: updateLesson, isPending: loadB } = useUpdateLesson(setOpen);
  const { mutate: addExam, isPending: loadC } = useAddExam(setOpen);
  const { mutate: updateExam, isPending: loadD } = useUpdateExam(setOpen);

  const onSubmit = async (data) => {
    if (dataType == "lessons") {
      selectedItem.id
        ? updateLesson({ data, id: selectedItem.id })
        : addLesson({ ...data, created_by: profile?.fullName });
    } else {
      // check if exam have atleast one valid quesiton
      const hasNoQuesitons =
        examData?.questions?.some((q) => q.question == null) ||
        examData?.questions?.length == 0 ||
        !examData?.questions;

      if (!hasNoQuesitons) {
        selectedItem.id
          ? updateExam({ data: { ...examData, ...data }, id: selectedItem.id })
          : addExam({ ...data, ...examData, created_by: profile?.fullName });
      }
    }
  };

  // laoding status for different mutation fn
  const isLoading = loadA || loadB || loadC || loadD;

  return (
    <>
      <AuthForm
        title={
          selectedItem?.id
            ? `Edit ${dataType.slice(0, -1)} data`
            : `Create new ${dataType.slice(0, -1)}`
        }
        validationSchema={dataType == "lessons" ? lessonSchema : examSchema}
        formFields={dataDefaultVals(
          dataType == "lessons" ? lessonsInputs : examsInputs,
          selectedItem
        )}
        submitText={selectedItem?.id ? "Update" : "Create"}
        onSubmit={onSubmit}
        loading={isLoading}
      >
        {/* render special questions in the modal exam only */}
        {dataType == "exams" && <ExamModal {...{ examData, setExamData }} />}
      </AuthForm>
    </>
  );
}
