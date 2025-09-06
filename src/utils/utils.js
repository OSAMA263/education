const getToken = () => localStorage.getItem("token");

// specific validaiton messages
const validationMessages = {
  passwordMesg:
    "Password must be at least 8 characters and include a number and a special character.",
  phoneMesg:
    "Phone number must start with 010, 011, 012, or 015 and be 11 digits long.",
};

// error message handler
function errorHandler(err, message) {
  if (message) return message;
  const msg =
    err?.response?.data?.message || err?.message || "something fucked";

  // specific user error case
  if (msg.includes("user already exist")) {
    return "Email or phone number is already used";
  }

  return msg;
}

export const { passwordMesg, phoneMesg } = validationMessages;

export { getToken, errorHandler };
