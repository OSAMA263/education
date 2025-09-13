import { api } from "@/utils/api";
import { ENDPOINT } from "@/utils/endpoints";

const getAllExamsRequest = async () => {
  const { data } = await api.get(ENDPOINT.EXAM);
  return data;
};

const getExamByIdRequest = async (examId) => {
  const { data } = await api.get(ENDPOINT.EXAM + examId);
  return data;
};

// admin access only dashboard and shit
// const addExamRequest=async(newExam)=>{
//   const{data}=await api.post(ENDPOINT.EXAM,newExam)
//   date and more details fk no
// }

const updateExamRequest = async (updatedExam, examId) => {
  const { data } = await api.put(ENDPOINT.EXAM + examId, updatedExam);
  return data;
};

const deleteExamRequest = async (examId) => {
  const { data } = await api.delete(ENDPOINT.EXAM + examId);
};

export {
  getAllExamsRequest,
  getExamByIdRequest,
  // addExamRequest,
  updateExamRequest,
  deleteExamRequest,
};
