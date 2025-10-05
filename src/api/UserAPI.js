import { api, ENDPOINT } from "@/utils/api";
import { supabase } from "@/utils/supabaseClient";
import { toast } from "@/utils/utils";
import emailjs from "@emailjs/browser";

const { USER, UPDATE_PASSWORD } = ENDPOINT;

const getUserProfile = async () => {
  const { data } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", data?.user.id)
    .single();

  return profile;
};

const updateProfile = async (newData, id) => {
  const { error: profileErr } = await supabase
    .from("profiles")
    .update({ ...newData })
    .eq("id", id)
    .select()
    .single();
  if (profileErr) throw profileErr;
};

const setOTP = async ({ email }) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString();

  // check if the email does exist
  const { error, data } = await supabase
    .from("profiles")
    .update({
      otp_code: otp,
      otp_expires_at: expiresAt,
    })
    .eq("email", email)
    .select();
  if (error) throw error;

  if ((await data.length) === 0) {
    throw new Error("No profile found for this email");
  }

  // send the otp
  try {
    await emailjs.send(
      "service_3af467h",
      "template_lnvq37s",
      {
        otp,
        email,
      },
      "epptficAfazT6NUZN"
    );
  } catch (error) {
    return error;
  }
};

const resetPassowrd = async (data) => {
  const { email, otp } = data;

  const { data: otpRecord, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("email", email)
    .eq("otp_code", otp)
    .maybeSingle();
  if (error || !otpRecord) throw new Error("Invalid OTP");

  // chekc if its expired
  if (new Date(otpRecord.otp_expires_at) < new Date()) {
    throw new Error("OTP expired");
  }
  return data;
  // await supabase.from("otps").update({ used: true }).eq("id", otpRecord.id);
};

const changePassword = async (email, passowrd) => {
  const { oldPassword, newPassword } = passowrd;

  if (oldPassword) {
    await reauthenticateUser(email, oldPassword);
  }

  const { data, error } = await supabase.auth.updateUser({
    password: newPassword || passowrd,
  });
  if (error)
    throw new Error("New password should be different from the old password.");

  return data;
};

const reauthenticateUser = async (email, oldPassword) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password: oldPassword,
  });

  if (error) throw new Error("Old password is incorrect");
  return data;
};

const getUserRequest = async () => {
  const { data } = await api.get(USER);
  return data;
};

const updateUser = async (newData, userId) => {
  const { data } = await api.put(`${USER}${userId}`, newData);
  return data;
};

const deleteUser = async () => {
  const { data } = await api.delete(USER);
  return data;
};

const updatePassword = async (newPassword) => {
  const { data } = await api.patch(USER + UPDATE_PASSWORD, newPassword);
  return data;
};

export {
  getUserRequest,
  updateUser,
  updatePassword,
  deleteUser,
  getUserProfile,
  updateProfile,
  changePassword,
  reauthenticateUser,
  setOTP,
  resetPassowrd,
};
