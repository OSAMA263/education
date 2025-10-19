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
const useSignUp = (setOpen) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const token = getToken();

  const signUp = async (formData) => {
    const { cpassword, password, ...filteredData } = formData;

    let adminSession = null;
    // save current admin
    if (token) {
      adminSession = (await supabase.auth.getSession()).data.session;
    }

    // create new acc
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });
    if (error) return toast("error", error);

    // create profile
    const { error: profileError } = await supabase.from("profiles").insert([
      {
        id: data.user.id,
        ...filteredData,
      },
    ]);
    if (profileError) return toast("error", error);

    // restore the admin session if there was one
    if (adminSession) {
      await supabase.auth.setSession(adminSession);
    } else {
      navigate("/auth/login", { replace: true });
    }

    queryClient.invalidateQueries(["all-users"]);
    toast("success", "Account has been created successfully!");
    setOpen && setOpen(false);
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
