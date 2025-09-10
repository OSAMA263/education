/* eslint-disable no-useless-escape */
import { toaster } from "@/components/ui/toaster";

const getToken = () => localStorage.getItem("token");

// error message handler
function errorHandler(err, message) {
  const msg =
    err?.response?.data?.message || err?.message || "something fucked";

  // return custom message in anyerror
  if (message) return message;

  // specific user error case
  // i have to do that cuz the api res message are not good
  if (msg.includes("user already exist")) {
    return "Email or phone number is already used";
  } else if (msg.includes("invalid password")) {
    return "Your old password is not correct";
  } else if (msg.includes('\"newPassword\" contains an invalid value')) {
    return "New password can not be the same as the old password";
  }

  return msg;
}

// logout handler
function logout() {
  localStorage.removeItem("token");
  window.location.reload();
}

const toast = (type, des, mes, rest = {}) => {
  toaster.create({
    type,
    description: type === "error" ? errorHandler(des, mes) : des,
    duration: 5000,
    max: 5,
    ...rest,
  });
};

// add the default value o an input prop
const dataDefaultVals = (data, defaultVal) =>
  data.map((obj) =>
    defaultVal[obj.name] ? { ...obj, values: defaultVal[obj.name] } : obj
  );

export { getToken, errorHandler, logout, toast, dataDefaultVals };
