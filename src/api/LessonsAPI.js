import { api, ENDPOINT } from "@/utils/api";

const { LESSON } = ENDPOINT;

const getAllLessonsRequest = async () => {
  const { data } = await api.get(LESSON);
  return data;
};

const getLessonByIdRequest = async (lessonId) => {
  const { data } = await api.get(LESSON + lessonId);
  return data;
};

const payLessonRequest = async (lessonId) => {
  const { data } = await api.post(`${LESSON}pay/${lessonId}`);
  return data;
};

// admin access----------------
const createLessonRequest = async (newLesson) => {
  const { data } = await api.post(LESSON, newLesson);
  return data;
};

const updateLessonRequest = async (updatedData, lessonId) => {
  const { data } = await api.put(LESSON + lessonId, updatedData);
  return data;
};

const deleteLessonRequest = async (lessonId) => {
  const { data } = await api.delete(LESSON + lessonId);
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
