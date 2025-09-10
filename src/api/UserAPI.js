import { ENDPOINT } from "./endpoints";
import { api } from "./api";

const getUserRequest = async () => {
  const { data } = await api.get(ENDPOINT.USER);
  return data;
};

const updateUser = async (newData, userId) => {
  const { data } = await api.put(`${ENDPOINT.USER}${userId}`, newData);
  return data;
};

const deleteUser = async () => {
  const { data } = await api.delete(ENDPOINT.USER);
  return data;
};

const updatePassword = async (newPassword) => {
  const { data } = await api.patch(
    ENDPOINT.USER + ENDPOINT.UPDATE_PASSWORD,
    newPassword
  );
  return data;
};
export { getUserRequest, updateUser, updatePassword, deleteUser };
