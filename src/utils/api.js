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

export { api ,MAIN_URL};
