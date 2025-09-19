import { getQuestionByIdRequest } from "@/api/QuestionAPI";
import { useQuery } from "@tanstack/react-query";

const useGetQuesitonById = (id) => {
  return useQuery({
    queryKey: ["question-id", id],
    queryFn: () => getQuestionByIdRequest(id),
    staleTime: 15 * 60 * 1000,
    retry:1
  });
};

export { useGetQuesitonById };
