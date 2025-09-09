import { ENDPOINT } from "./endpoints";
import { api } from "./api";

const getUserRequest = async () => {
  const { data } = await api.get(ENDPOINT.USER);
  return data;
};

const updateUser = async (newData, userId) => {
  const { data } = api.put(`${ENDPOINT.USER}${userId}`, newData);
  console.log(data);
  return data;
};

const deleteUser = async () => {
  const { data } = api.delete(ENDPOINT.USER);
  console.log(data);
  return data;
};

const updatePassword = async (newPassword) => {
  const { data } = api.patch(ENDPOINT.USER + "update-password", newPassword);
  console.log(data);
  return data;
};
export { getUserRequest, updateUser, updatePassword, deleteUser };
