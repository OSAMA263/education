import { loginRequest } from "@/api/AuthAPI";
import { toaster } from "@/components/ui/toaster";
import { errorHandler } from "@/utils/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

// the query hooks
export const useLogin = () => {
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

// const useRegister = (data) => {
//   return useQuery({
// queryKey:["profile"],
//     queryFn: () => registerRequest(data),
//     onSuccess: () => {},
//     onError: () => {},
//   });
// };
