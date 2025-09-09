import CustomContainer from "@/components/layout/CustomContainer";
import { useProfile } from "@/routes/AuthProvider";
import {IconButton } from "@chakra-ui/react";
import { ImUser, ImUserTie } from "react-icons/im";
import { FiEdit3 } from "react-icons/fi";
import Modal from "@/components/Modal";

export default function UserPage() {
  const { profile } = useProfile();
  const { fullName, email, role, phoneNumber, createdAt, classLevel } = profile;

  const userDetails = [
    { label: "Email", value: email },
    { label: "Phone", value: phoneNumber },
    {
      label: "Member Since",
      value: createdAt ? new Date(createdAt).toLocaleDateString() : null,
    },
    { label: "Class Level", value: classLevel },
  ];

  return (
    <CustomContainer>
      <div className="min-w-3xl w-fit mx-auto p-20 bg-bg-gray rounded-xl flex flex-col items-center gap-20 relative">
        {/* name & role */}
        <div className="flex flex-col items-center">
          <div className="mb-6 text-4xl">
            {role === "admin" ? <ImUserTie /> : <ImUser />}
          </div>
          <h1 className="text-xl font-bold">{fullName}</h1>
          <p className="text-secondary">{role}</p>
        </div>
        {/* more details */}
        <div className="w-full grid grid-cols-2 gap-y-4">
          {userDetails.map(
            ({ label, value }, i) =>
              value && (
                <div key={i}>
                  <h1 className="font-semibold text-secondary text-lg">
                    {label}:
                  </h1>
                  <p>{value}</p>
                </div>
              )
          )}
        </div>
        {/* edit user btn */}
        <IconButton
          className="top-0 right-0 !absolute"
          variant={"outline"}
          rounded={"xl"}
        >
          <FiEdit3 />
        </IconButton>
        <Modal/>
      </div>
    </CustomContainer>
  );
}
