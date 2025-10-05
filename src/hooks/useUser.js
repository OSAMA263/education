import {
  changePassword,
  deleteUser,
  getUserProfile,
  getUserRequest,
  resetPassowrd,
  setOTP,
  updatePassword,
  updateProfile,
  updateUser,
} from "@/api/UserAPI";
import { supabase } from "@/utils/supabaseClient";
import { getToken, logout, toast } from "@/utils/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// get user profile
const useGetUser = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getUserProfile,
  });
};

const useSendOTP = () => {
  return useMutation({
    mutationFn: (email) => setOTP(email),
    onSuccess: () => {
      toast("success", "OTP code was sent to your mail");
    },
    onError: (error) => {
      toast("error", error);
    },
  });
};

const useResetPassword = () => {
  return useMutation({
    mutationFn: (data) => resetPassowrd(data),
    onError: (error) => {
      toast("error", error);
    },
  });
};

// update the user password
const useUpdatePassword = () => {
  return useMutation({
    mutationFn: ({ email, newPass }) => changePassword(email, newPass),
    onSuccess: () => {
      toast("success", "Your password has been updated!");
    },
    onError: (err) => {
      toast("error", err);
    },
  });
};

// update user data
const useUpdateUser = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newData) => updateProfile(newData, id),
    onSuccess: () => {
      toast("success", "Your profile has been updated!");
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: (err) => {
      toast("error", err);
    },
  });
};

export {
  useUpdatePassword,
  useUpdateUser,
  useGetUser,
  useSendOTP,
  useResetPassword,
};
