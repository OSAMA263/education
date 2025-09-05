import { ENDPOINT } from "./endpoints";
import { api } from "./api";
// get
// post and shit

export const loginRequest = async (user) => {
  const { data } = await api.post(ENDPOINT.LOG_IN, user);
  return data;
};
