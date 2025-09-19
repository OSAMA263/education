import { api, ENDPOINT } from "@/utils/api";

const { USER, UPDATE_PASSWORD } = ENDPOINT;

const getUserRequest = async () => {
  const { data } = await api.get(USER);
  return data;
};

const updateUser = async (newData, userId) => {
  const { data } = await api.put(`${USER}${userId}`, newData);
  return data;
};

const deleteUser = async () => {
  const { data } = await api.delete(USER);
  return data;
};

const updatePassword = async (newPassword) => {
  const { data } = await api.patch(USER + UPDATE_PASSWORD, newPassword);
  return data;
};

export { getUserRequest, updateUser, updatePassword, deleteUser };
