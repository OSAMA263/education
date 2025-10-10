import {
  getAllExamsRequest,
  getExamByIdRequest,
  getExamScoreRequest,
  getRemainingTimeRequest,
  startExamRequest,
  submitExamRequest,
} from "@/api/ExamsAPI";
import { toast } from "@/utils/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useGetAllExams = () => {
  return useQuery({
    queryKey: ["all-exams"],
    queryFn: getAllExamsRequest,
    retry: 1,
    staleTime: 15 * 60 * 1000,
  });
};

const useGetExamById = (id) => {
  return useQuery({
    queryKey: ["exam-id", id],
    queryFn: () => getExamByIdRequest(id),
    staleTime: 15 * 60 * 1000,
  });
};

const useGetRemainTime = (id) => {
  return useQuery({
    queryKey: ["remain-time", id],
    queryFn: () => getRemainingTimeRequest(id),
    staleTime: 15 * 60 * 1000,
    retry: 1,
  });
};

const useGetExamScore = (id) => {
  return useQuery({
    queryKey: ["exam-score", id],
    queryFn: () => getExamScoreRequest(id),
    staleTime: 15 * 60 * 1000,
    retry: 1,
  });
};

const useStartExam = (userId) => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (id) => startExamRequest(id, userId),
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: (err) => {
      toast("error", err);
    },
  });
};

const useSubmitExam = (id) => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: ({ answers, userId }) => submitExamRequest(id, answers, userId),
    onSuccess: () => {
      toast("success", "Your answers have been submitted.");
      query.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: (err) => {
      toast("error", err);
    },
  });
};

// mutationFn: ({ id, answers }) => startExamRequest(id, answers),

// for admin access

export {
  useGetAllExams,
  useGetExamById,
  useGetRemainTime,
  useGetExamScore,
  useStartExam,
  useSubmitExam,
};
