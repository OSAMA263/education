import { api } from "@/utils/api";
import { ENDPOINT } from "@/utils/endpoints";

// axios calls for the auth

const loginRequest = async (formData) => {
  const { data } = await api.post(ENDPOINT.LOG_IN, formData);
  return data;
};

const registerRequest = async (formData) => {
  const { data } = await api.post(ENDPOINT.SIGN_UP, formData);
  return data;
};

const forgotPasswordRequest = async (email) => {
  const { data } = await api.post(ENDPOINT.FORGOT_PASSWORD, email);
  return data;
};

const resetPasswordRequest = async (newData) => {
  const { data } = await api.post(ENDPOINT.RESET_PASSWORD, newData);
  return data;
};

export {
  loginRequest,
  registerRequest,
  forgotPasswordRequest,
  resetPasswordRequest,
};
