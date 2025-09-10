import {
  forgotPasswordRequest,
  loginRequest,
  registerRequest,
  resetPasswordRequest,
} from "@/api/AuthAPI";
import { toast } from "@/utils/utils";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// login
const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      localStorage.setItem("token", data?.token);
      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast("error", err);
    },
  });
};

// register
const useSignUp = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (formData) => registerRequest(formData),
    onSuccess: () => {
      toast(
        "success",
        "We’ve sent a verification email to your address — please check your inbox in a minute to verify it."
      );
      navigate("/auth/login", { replace: true });
    },
    onError: (error) => {
      toast("error", error);
    },
  });
};

// send opt code to email
const useForgotPassword = () => {
  return useMutation({
    mutationFn: (email) => forgotPasswordRequest(email),
    onSuccess: () => {
      toast(
        "success",
        "We’ve sent a OTP code email to your address — please check your inbox."
      );
    },
    onError: (err) => {
      toast("error", err);
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
      toast("success", "Your password has been successfully reset.");
    },
    onError: (err) => {
      toast("error", err);
    },
  });
};

export { useLogin, useSignUp, useForgotPassword, useResetPassword };
