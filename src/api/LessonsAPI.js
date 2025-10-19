import { api, ENDPOINT } from "@/utils/api";
import { supabase } from "@/utils/supabaseClient";
import { getUserLessons } from "./UserAPI";

const { LESSON } = ENDPOINT;

const getAllLessonsRequest = async () => {
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .order("created_at");

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
  const { startDate, ...rest } = newLesson;

  const { data, error } = await supabase
    .from("lessons")
    .insert([{ startDate: new Date(startDate).toISOString(), ...rest }])
    .select();

  if (error) throw new Error(error);

  return data;
};

const updateLessonRequest = async (updatedLesson, id) => {
  const { data, error } = await supabase
    .from("lessons")
    .update(updatedLesson)
    .eq("id", id)
    .select()
    .single();

  if (error || !data) throw new Error("Update lesson created by you only");

  return data;
};

const deleteLessonRequest = async (id) => {
  const { data, error } = await supabase
    .from("lessons")
    .delete()
    .eq("id", id)
    .select()
    .single();

  if (error || !data) throw new Error("Delete lessons created by you only");

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
