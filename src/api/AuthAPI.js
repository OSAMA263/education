import { ENDPOINT } from "./endpoints";
import { api } from "./api";

// axios calls for the auth
// login, sigin-up

const loginRequest = async (formData) => {
  const { data } = await api.post(ENDPOINT.LOG_IN, formData);
  return data;
};

const registerRequest = async (formData) => {
  const { data } = await api.post(ENDPOINT.SIGN_UP, formData);
  return data;
};

export { loginRequest, registerRequest };