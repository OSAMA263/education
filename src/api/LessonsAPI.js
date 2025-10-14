import { api, ENDPOINT } from "@/utils/api";
import { supabase } from "@/utils/supabaseClient";
import { getUserLessons } from "./UserAPI";

const { LESSON } = ENDPOINT;

const getAllLessonsRequest = async () => {
  const { data, error } = await supabase.from("lessons").select("*");

  if (error) throw new Error(error);
  return data;
};

const payLessonRequest = async (id, userId) => {
  const lessons = await getUserLessons(userId);
  const updatedLessons = [...(lessons || []), id];

  const { data: upLessons, error } = await supabase
    .from("profiles")
    .update({ lessons: updatedLessons })
    .eq("id", userId);

  if (error) throw error;

  return upLessons;
};

const getLessonByIdRequest = async (lessonId) => {
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("id", lessonId)
    .single();

  if (error) throw error;

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
