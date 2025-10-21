import { ENDPOINT, api } from "@/utils/api";
import { supabase } from "@/utils/supabaseClient";
import { getUserExams } from "./UserAPI";

const { EXAM, EXAM_START, EXAM_SUBMIT, STUDENT_EXAM_SCORE, REMAINING_TIME } =
  ENDPOINT;

const getAllExamsRequest = async () => {
  const { data, error } = await supabase
    .from("exams")
    .select("*")
    .order("created_at");

  if (error) throw new Error(error);
  return data;
};

const getExamByIdRequest = async (id) => {
  const { data, error } = await supabase
    .from("exams")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
};

const startExamRequest = async (id, userId) => {
  const exams = await getUserExams(userId);

  const updatedExams = [
    {
      id,
      answers: [],
      isSubmitted: false,
      created_at: new Date().toISOString(),
    },
    ...(exams || []),
  ];

  const { data, error } = await supabase
    .from("profiles")
    .update({ exams: updatedExams })
    .eq("id", userId);

  if (error) throw new Error(error);

  return data;
};

const submitExamRequest = async (id, examAnswers, userId) => {
  const exams = await getUserExams(userId);

  const updatedExams = exams.map((exam) =>
    exam.id == id
      ? { ...exam, answers: examAnswers || [], isSubmitted: true }
      : exam
  );

  const { data, error } = await supabase
    .from("profiles")
    .update({ exams: updatedExams })
    .eq("id", userId)
    .select();

  if (error) throw new Error(error);

  return data;
};

const getExamScoreRequest = async (id) => {
  const { data } = await api.get(STUDENT_EXAM_SCORE + id);
  return data;
};

const getRemainingTimeRequest = async (id) => {
  const { data } = await api.get(REMAINING_TIME + id);
  return data;
};

// admin access only dashboard and shit

const createExamRequest = async (newExam) => {
  const { startDate, endDate, ...rest } = newExam;

  const { data, error } = await supabase
    .from("exams")
    .insert([
      {
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
        ...rest,
      },
    ])
    .select();

  if (error) throw new Error(error);

  return data;
};

const updateExamRequest = async (updatedExam, id) => {
  const { data, error } = await supabase
    .from("exams")
    .update(updatedExam)
    .eq("id", id)
    .select()
    .single();

  if (error || !data) throw new Error("Update Exam created by you only");

  return data;
};

const deleteExamRequest = async (id) => {
  const { data, error } = await supabase
    .from("exams")
    .delete()
    .eq("id", id)
    .select()
    .single();

  if (error || !data) throw new Error("Delete Exams created by you only");

  return data;
};

export {
  // client
  getAllExamsRequest,
  getExamByIdRequest,
  startExamRequest,
  submitExamRequest,
  getExamScoreRequest,
  getRemainingTimeRequest,
  // dashboard
  createExamRequest,
  updateExamRequest,
  deleteExamRequest,
};
