import { ENDPOINT, api } from "@/utils/api";

const { EXAM, EXAM_START, EXAM_SUBMIT, STUDENT_EXAM_SCORE, REMAINING_TIME } =
  ENDPOINT;

const getAllExamsRequest = async () => {
  const { data } = await api.get(EXAM);
  return data;
};

const getExamByIdRequest = async (id) => {
  const { data } = await api.get(`${EXAM}get/${id}`);
  return data;
};

const startExamRequest = async (id) => {
  const { data } = await api.post(EXAM_START + id);
  return data;
};

const submitExamRequest = async (id, examAnswers) => {
  const { data } = await api.post(EXAM_SUBMIT + id, { answers: examAnswers });
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
// const addExamRequest=async(newExam)=>{
//   const{data}=await api.post(EXAM,newExam)
//   date and more details fk no
// }

const updateExamRequest = async (updatedExam, examId) => {
  const { data } = await api.put(EXAM + examId, updatedExam);
  return data;
};

const deleteExamRequest = async (examId) => {
  const { data } = await api.delete(EXAM + examId);
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
  updateExamRequest,
  deleteExamRequest,
};
