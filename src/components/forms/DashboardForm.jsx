import { examsInputs, lessonsInputs } from "@/pages/dashboard/inputs_data";
import AuthForm from "./AuthForm";
import { useAuthData } from "@/routes/AuthProvider";
import { dataDefaultVals } from "@/utils/utils";
import { useContext } from "react";
import { DashboardContext } from "@/routes/DashboardProvider";
import { examSchema, lessonSchema } from "@/validations/Dashboard";
import { useAddLesson, useUpdateLesson } from "@/hooks/useLessons";

export default function DashboardForm({ dataType, setOpen }) {
  const { selectedItem } = useContext(DashboardContext);
  const { profile } = useAuthData();

  // mutaiton funcitons for exam or lessons
  const { mutate: addLesson, isPending: loadA } = useAddLesson(setOpen);
  const { mutate: updateLesson, isPending: loadB } = useUpdateLesson(setOpen);
  // const { mutate: addLesson, isPending:loadC } = useAddLesson(setOpen);
  // const { mutate: addLesson, isPending:loadD } = useAddLesson(setOpen);

  const onSubmit = async (data) => {
    if (dataType == "lessons") {
      selectedItem.id
        ? updateLesson({ data, id: selectedItem.id })
        : addLesson({ ...data, created_by: profile?.fullName });
    } else {
      selectedItem.id ? "edit exam funciton" : "add exam";
    }
  };

  // laoding status for different mutation fn
  const isLoading = loadA || loadB;

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
      />
    </>
  );
}
