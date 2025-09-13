import { getAllExamsRequest, getExamByIdRequest } from "@/api/ExamsAPI";
import { useQuery } from "@tanstack/react-query";

const useGetAllExams = () => {
  return useQuery({
    queryKey: ["all-exams"],
    queryFn: getAllExamsRequest,
  });
};

const useGetExamById = () => {
  return useQuery({
    queryKey: ["exam-id"],
    queryFn: (id) => getExamByIdRequest(id),
  });
};

// for admin access

export { useGetAllExams, useGetExamById };
