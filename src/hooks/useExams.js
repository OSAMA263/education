import {
  createExamRequest,
  deleteExamRequest,
  getAllExamsRequest,
  getExamByIdRequest,
  getExamScoreRequest,
  getRemainingTimeRequest,
  startExamRequest,
  submitExamRequest,
  updateExamRequest,
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

// for admin access dashboard
const useAddExam = (setOpen) => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: createExamRequest,
    onSuccess: () => {
      toast("success", "Exam has been created!");
      setOpen(false);
      query.invalidateQueries({ queryKey: ["all-exams"] });
    },
    onError: (err) => {
      toast("error", err);
    },
  });
};

const useUpdateExam = (setOpen) => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: ({ data, id }) => updateExamRequest(data, id),
    onSuccess: () => {
      toast("success", "Exam has been updated!");
      query.invalidateQueries({ queryKey: ["all-exams"] });
      setOpen(false);
    },
    onError: (err) => {
      toast("error", err);
    },
  });
};

const useDeleteExam = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: deleteExamRequest,
    onSuccess: () => {
      toast("warning", "Exam has been deleted");
      query.invalidateQueries({ queryKey: ["all-exams"] });
    },
    onError: (err) => {
      toast("error", err);
    },
  });
};

export {
  useGetAllExams,
  useGetExamById,
  useGetRemainTime,
  useGetExamScore,
  useStartExam,
  useSubmitExam,
  useAddExam,
  useUpdateExam,
  useDeleteExam,
};
