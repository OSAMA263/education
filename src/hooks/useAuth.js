import { forgotPasswordRequest, resetPasswordRequest } from "@/api/AuthAPI";
import { supabase } from "@/utils/supabaseClient";
import { getToken, toast } from "@/utils/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// login
const useLogin = () => {
  const navigate = useNavigate();

  const logIn = async (formData) => {
    const { data, error } = await supabase.auth.signInWithPassword(formData);
    if (error) return toast("error", error);

    if (data) {
      localStorage.setItem("token", data?.session.access_token);
      navigate("/", { replace: true });
    }
  };
  return { logIn };
};

// register
const useSignUp = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const signUp = async ({
    email,
    password,
    classLevel,
    fullName,
    phoneNumber,
    role,
  }) => {
    const token = getToken();

    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return toast("error", error);

    const { error: profileError } = await supabase.from("profiles").insert([
      {
        id: data.user.id,
        phoneNumber,
        email,
        classLevel,
        fullName,
        role,
      },
    ]);
    if (profileError) return toast("error", error);

    // if a user created an aaccount
    if (data && !token) {
      navigate("/auth/login", { replace: true });
    }
    // if admin created an accont
    if (token) {
      navigate("/dashboard/base", { replace: true });
    }
    queryClient.invalidateQueries(["all-users"]);
    toast("success", "Account has been created successfully!");

    return data.user;
  };

  return { signUp };
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
