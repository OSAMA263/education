import { api, ENDPOINT } from "@/utils/api";
// axios calls for the auth
const { LOG_IN, SIGN_UP, USER, RESET_PASSWORD, FORGOT_PASSWORD } = ENDPOINT;

const loginRequest = async (formData) => {
  const { data } = await api.post(LOG_IN, formData);
  return data;
};

const registerRequest = async (formData) => {
  const { data } = await api.post(SIGN_UP, formData);
  return data;
};

const forgotPasswordRequest = async (email) => {
  const { data } = await api.post(FORGOT_PASSWORD + USER, email);
  return data;
};

const resetPasswordRequest = async (newData) => {
  const { data } = await api.post(RESET_PASSWORD + USER, newData);
  return data;
};

export {
  loginRequest,
  registerRequest,
  forgotPasswordRequest,
  resetPasswordRequest,
};
