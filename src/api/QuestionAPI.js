import { api, ENDPOINT } from "@/utils/api";
const { QUESTION } = ENDPOINT;

const getQuestionByIdRequest = async (id) => {
  const { data } = await api.get(`${QUESTION}get/${id}`);
  return data;
};

export { getQuestionByIdRequest };
