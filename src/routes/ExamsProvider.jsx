import { useGetAllExams } from "@/hooks/useExams";
import { createContext, useContext } from "react";

const ExamsContext = createContext();

export default function ExamsProvider({ children }) {
// get all the exams user attende to and the scores


  return <ExamsContext.Provider>{children}</ExamsContext.Provider>;
}

export const useUserExams = () => useContext(ExamsContext);
