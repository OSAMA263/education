import { examsInputs, lessonsInputs } from "@/pages/dashboard/inputs_data";
import AuthForm from "./AuthForm";
import { useAuthData } from "@/routes/AuthProvider";
import { dataDefaultVals } from "@/utils/utils";
import { useContext } from "react";
import { DashboardContext } from "@/routes/DashboardProvider";
import { examSchema, lessonSchema } from "@/validations/Dashboard";

export default function DashboardForm({ dataType }) {
  const { selectedItem } = useContext(DashboardContext);
  const { profile } = useAuthData();

  const onSubmit = async (data) => {
    return { ...data, created_by: profile?.fullName };
  };

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
      />
    </>
  );
}
