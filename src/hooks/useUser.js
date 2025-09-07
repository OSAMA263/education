import { forgotPasswordRequest, resetPasswordRequest } from "@/api/UserAPI";
import { toaster } from "@/components/ui/toaster";
import { errorHandler } from "@/utils/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

// send opt code to email
const useForgotPassword = () => {
  return useMutation({
    mutationFn: (email) => forgotPasswordRequest(email),
    onSuccess: () => {
      toaster.create({
        description:
          "We’ve sent a OTP code email to your address — please check your inbox.",
        type: "success",
        duration: 5000,
      });
    },
    onError: (err) => {
      toaster.create({
        description: errorHandler(err, "No user was found by this email"),
        type: "error",
      });
    },
  });
};

// reset the password
const useResetPassword = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (email) => resetPasswordRequest(email),
    onSuccess: () => {
      navigate("/auth/login", { replace: true });
      toaster.create({
        description: "Your password has been successfully reset.",
        type: "success",
        duration: 5000,
      });
    },
    onError: (err) => {
      toaster.create({
        description: errorHandler(err),
        type: "error",
      });
    },
  });
};

// get user profile

const useGetUser = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: "",
  });
};

export { useForgotPassword, useResetPassword };
