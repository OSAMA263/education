import { createListCollection } from "@chakra-ui/react";

const updateUserInputs = [
  {
    label: "Full Name",
    type: "text",
    placeholder: "Osama Ali",
    name: "fullName",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "example@gmail.com",
    name: "email",
    autoComplete: "email",
  },
  {
    label: "Phone Number",
    type: "tel",
    placeholder: "01234567891",
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

const updatePasswordInputs = [
  { label: "Old Password", type: "password", name: "oldPassword" },
  { label: "New Password", type: "password", name: "newPassword" },
  { label: "Re-enter new password", type: "password", name: "cpassword" },
];

export { updateUserInputs, updatePasswordInputs };
