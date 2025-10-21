/* eslint-disable no-useless-escape */
import { toaster } from "@/components/ui/toaster";
import { useAuthData } from "@/routes/AuthProvider";

const getToken = () => localStorage.getItem("token");

// error message handler
function errorHandler(err, message) {
  const msg = err?.message || "something fucked";

  // return custom message in anyerror
  if (message) return message;

  // specific user error case
  // i have to do that cuz the api res message are not good
  // if (msg.includes("user already exist")) {
  //   return "Email or phone number is already used";
  // } else if (msg.includes("invalid password")) {
  //   return "Your old password is not correct";
  // } else if (msg.includes('\"newPassword\" contains an invalid value')) {
  //   return "New password can not be the same as the old password";
  // }

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
    closable: true,
    ...rest,
  });
};

// add a default value o an input form prop
const dataDefaultVals = (inputs, defaultData) =>
  inputs.map((prop) => {
    const val = defaultData[prop.name];

    if (!val) return prop;

    // if the value is a valid date string, convert to Date object
    const isDate = typeof val === "string" && !isNaN(Date.parse(val));

    return {
      ...prop,
      values: isDate ? new Date(val) : val,
    };
  });

// is lessons or exams date is accsseable NOW
const isAvailable = (itemDate) => {
  const nowData = new Date();
  const scheduledDate = new Date(itemDate);

  const isAvailable = nowData >= scheduledDate;
  return isAvailable;
};

const useExamStatus = (examId, data) => {
  const { profile } = useAuthData();
  const dateNow = new Date();
  let btnText = "Loading...";

  const examInProgress =
    Array.isArray(profile?.exams) &&
    profile?.exams.find((exam) => exam.id == examId);

  const startedAt = new Date(examInProgress?.created_at);
  const expiresAt =
    startedAt && data?.duration
      ? new Date(startedAt.getTime() + data.duration * 60 * 1000)
      : null;

  const stillRunning = dateNow < expiresAt;
  const timesUp = dateNow >= expiresAt;

  const expired = isAvailable(data?.endDate);
  const available = isAvailable(data?.startDate) && !expired;

  // if the student started the exam already
  if (examInProgress) {
    if (timesUp || examInProgress?.isSubmitted) {
      btnText = "Show score";
    } else if (stillRunning) {
      btnText = "Continue exam";
    }
    // if the student didnt start the exam
  } else {
    if (expired) {
      btnText = "Exam is expired";
    } else if (!available) {
      btnText = "Exam isnt available yet";
    } else {
      btnText = "Take exam";
    }
  }

  return {
    examInProgress,
    stillRunning,
    timesUp,
    expired,
    available,
    btnText,
    expiresAt,
  };
};

const checkIfDate = ([key, val]) => {
  const isDate = (val) => {
    const date = new Date(val);
    return !isNaN(date.getTime());
  };
  const numbers = ["id", "price", "duration"];

  if (key == "created_at") return null;

  if (numbers.includes(key)) {
    return typeof val == "string" ? val.slice(0, 10) + "..." : val;
  }
  if (isDate(val)) return new Date(val).toLocaleDateString("en-GB");

  return val.length > 20 ? val.slice(0, 20) + "..." : val;
};

export {
  getToken,
  errorHandler,
  logout,
  toast,
  dataDefaultVals,
  isAvailable,
  useExamStatus,
  checkIfDate,
};
