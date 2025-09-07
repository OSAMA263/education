import { ENDPOINT } from "./endpoints";
import { api } from "./api";

const forgotPasswordRequest = async (email) => {
  const { data } = await api.post(ENDPOINT.FORGOT_PASSWORD, email);
  return data;
};

const resetPasswordRequest = async (newData) => {
  const { data } = await api.post(ENDPOINT.RESET_PASSWORD, newData);
  return data;
};

const getUserRequest = async () => {
  const { data } = await api.get(ENDPOINT.USER);
  return data;
};

export { forgotPasswordRequest, resetPasswordRequest, getUserRequest };
