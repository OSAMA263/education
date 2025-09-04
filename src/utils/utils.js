const getToken = () => localStorage.getItem("token");

// error message handler
function errorHandler(err, message) {
  if (message) return message;

  const msg =
    err?.response?.data?.message || err?.message || "something fucked";

  // specific password pattern case
  if (
    msg.includes(
      "required pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/"
    )
  ) {
    return "Password must contain a capital letter 'A' and special symbol like '@'";
  }

  return msg;
}

export { getToken, errorHandler };
