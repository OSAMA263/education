import {
  deleteUser,
  getUserRequest,
  updatePassword,
  updateUser,
} from "@/api/UserAPI";
import { getToken, logout, toast } from "@/utils/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// get user profile
const useGetUser = () => {
  const token = getToken();

  return useQuery({
    queryKey: ["profile", token],
    queryFn: getUserRequest,
    retry: 1,
    enabled: !!token,
  });
};

// update user data
const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      toast("success", "Your profile has been updated!");
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: (err) => {
      toast("error", err);
    },
  });
};

// deletet the user
const useDeleteUser = () => {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      logout();
    },
    onError: (err) => {
      toast("error", err);
    },
  });
};

// update the user password
const useUpdatePassword = () => {
  const nav = useNavigate();

  return useMutation({
    mutationFn: updatePassword,
    onSuccess: () => {
      toast("success", "Your password has been updated!");
      nav("/user/profile", { replace: true });
    },
    onError: (err) => {
      toast("error", err);
    },
  });
};

// const updatePassword = async (newPassword) => {
//   const { data } = api.patch(ENDPOINT.USER + "update-password", newPassword);
//   console.log(data);
//   return data;
// };

export { useGetUser, useUpdateUser, useDeleteUser, useUpdatePassword };
