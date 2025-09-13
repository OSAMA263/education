import { api } from "@/utils/api";
import { ENDPOINT } from "@/utils/endpoints";

const getAllLessonsRequest = async () => {
  const { data } = await api.get(ENDPOINT.LESSON);
  return data;
};

const getLessonByIdRequest = async (lessonId) => {
  const { data } = await api.get(ENDPOINT.LESSON + lessonId);
  return data;
};

const payLessonRequest = async (lessonId) => {
  const { data } = await api.post(`${ENDPOINT.LESSON}pay/${lessonId}`);
  return data;
};

// admin access----------------
const createLessonRequest = async (newLesson) => {
  const { data } = await api.post(ENDPOINT.LESSON, newLesson);
  return data;
};

const updateLessonRequest = async (updatedData, lessonId) => {
  const { data } = await api.put(ENDPOINT.LESSON + lessonId, updatedData);
  return data;
};

const deleteLessonRequest = async (lessonId) => {
  const { data } = await api.delete(ENDPOINT.LESSON + lessonId);
  return data;
};

export {
  getAllLessonsRequest,
  getLessonByIdRequest,
  payLessonRequest,
  createLessonRequest,
  updateLessonRequest,
  deleteLessonRequest,
};
