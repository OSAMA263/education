import { toaster } from "@/components/ui/toaster";

const getToken = () => localStorage.getItem("token");

// error message handler
function errorHandler(err, message) {
  const msg =
    err?.response?.data?.message || err?.message || "something fucked";

  // return custom message in anyerror
  if (msg && message) return message;

  // specific user error case
  if (msg.includes("user already exist")) {
    return "Email or phone number is already used";
  }

  return msg;
}

// logout handler
function logout() {
  localStorage.removeItem("token");
  window.location.reload();
}

const toast = (type, des, rest={}) => {
  toaster.create({
    type,
    description: type === "error" ? errorHandler(des) : des,
    duration:5000,
    ...rest,
  });
};

export { getToken, errorHandler, logout, toast };
