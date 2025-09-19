import { getToken } from "@/utils/utils";
import axios from "axios";

const MAIN_URL = "https://edu-master-delta.vercel.app/";

// interceptor for the main api
const api = axios.create({
  baseURL: MAIN_URL,
});

api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.token = `${token}`;
  }

  return config;
});

const ENDPOINT = {
  // auth
  SIGN_UP: "auth/signup/",
  LOG_IN: "auth/login/",
  // user
  FORGOT_PASSWORD: "user/forgot-password/",
  RESET_PASSWORD: "user/reset-password/",
  UPDATE_PASSWORD: "update-password/",
  USER: "user/",
  LESSON: "lesson/",

  EXAM: "exam/",
  EXAM_START: "studentExam/start/",
  EXAM_SUBMIT: "studentExam/submit/",
  STUDENT_EXAM_SCORE: "studentExam/exams/score/",
  REMAINING_TIME: "studentExam/exams/remaining-time/",

  QUESTION: "question/",
};

export { api, MAIN_URL, ENDPOINT };
