import { loginRequest, registerRequest } from "@/api/AuthAPI";
import { toaster } from "@/components/ui/toaster";
import { errorHandler } from "@/utils/utils";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

// login
const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      localStorage.setItem("token", data?.token);
      navigate("/", { replace: true });
    },
    onError: (error) => {
      toaster.create({
        description: errorHandler(error),
        type: "error",
      });
    },
  });
};

// register
const useSignUp = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (formData) => registerRequest(formData),
    onSuccess: () => {
      toaster.create({
        type: "success",
        duration: 5000,
        description:
          "We’ve sent a verification email to your address — please check your inbox to verify it.",
      });
      navigate("/auth/login", { replace: true });
    },
    onError: (error) => {
      toaster.create({
        description: errorHandler(error),
        type: "error",
      });
    },
  });
};

export { useLogin, useSignUp };
