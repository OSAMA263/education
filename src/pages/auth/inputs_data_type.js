import { createListCollection } from "@chakra-ui/react";

const login_inputs = [
  {
    label: "Email",
    placeholder: "example@email.com",
    type: "email",
    name: "email",
    autoComplete: "email",
    values: {
      student: "osamaelseify11@gmail.com",
      admin: "adminO@gmail.com",
    },
  },

  {
    label: "Password",
    placeholder: "Example@123",
    type: "password",
    name: "password",
    values: {
      student: "Osama@12345",
      admin: "Admin#123",
    },
  },
];

const registration_inputs = [
  {
    label: "Full Name",
    placeholder: "Ahmed Ali",
    type: "text",
    name: "fullName",
  },
  {
    label: "Email",
    placeholder: "example@email.com",
    type: "email",
    name: "email",
    autoComplete: "email",
  },

  {
    label: "Password",
    placeholder: "Example@123",
    type: "password",
    name: "password",
  },

  {
    label: "Confirm Password",
    placeholder: "Example@123",
    type: "password",
    name: "cpassword",
  },
  {
    label: "Phone Nummber",
    placeholder: "01234567891",
    type: "tel",
    name: "phoneNumber",
  },
  {
    label: "Class Level",
    type: "select",
    name: "classLevel",
    options: createListCollection({
      items: [
        { label: "Grade 1", value: "Grade 1 Secondary" },
        { label: "Grade 2", value: "Grade 2 Secondary" },
        { label: "Grade 3", value: "Grade 3 Secondary" },
      ],
      itemToString: (item) => item.label,
    }),
  },
];

const forgot_password_inputs = [
  {
    label: "Email",
    placeholder: "example@email.com",
    type: "email",
    name: "email",
    autoComplete: "email",
  },
];

const reset_password_inputs = [
  {
    label: "Email",
    placeholder: "example@email.com",
    type: "email",
    name: "email",
    autoComplete: "email",
  },

  {
    label: "New Password",
    placeholder: "Example@123",
    type: "password",
    name: "newPassword",
  },

  {
    label: "Confirm Password",
    placeholder: "Example@123",
    type: "password",
    name: "cpassword",
  },

  {
    label: "OTP",
    placeholder: "Enter OTP",
    type: "text",
    name: "otp",
  },
];

export {
  login_inputs,
  registration_inputs,
  forgot_password_inputs,
  reset_password_inputs,
};
