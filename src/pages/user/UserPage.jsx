import CustomContainer from "@/components/layout/CustomContainer";
import { ImUser, ImUserTie } from "react-icons/im";
import MenuWrapper from "@/components/MenuWrapper";
import { TbDotsVertical } from "react-icons/tb";
import { Menu } from "@chakra-ui/react";
import UpdateDataModal from "./modals/UpdateDataModal";
import UpdatePasswordModal from "./modals/UpdatePasswordModal";
import DeleteAccountModal from "./modals/DeleteAccountModal";
import { useAuthData } from "@/routes/AuthProvider";

export default function UserPage() {
  const { userData } = useAuthData();
  const { fullName, email, role, phoneNumber, createdAt, classLevel } =
    userData;

  const userDetails = [
    { label: "Email", value: email },
    { label: "Phone", value: phoneNumber },
    {
      label: "Member Since",
      value: createdAt ? new Date(createdAt).toLocaleDateString("en-GB") : null,
    },
    { label: "Class Level", value: classLevel },
  ];

  return (
    <CustomContainer>
      <div className="min-w-3xl w-fit mx-auto p-20 bg-bg-gray rounded-xl flex flex-col items-center gap-20 relative border border-secondary/50">
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
              // filter the classLevel for the admin
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

        {/* user options*/}
        <div className="top-2 right-2 !absolute">
          <MenuWrapper openBtnIcon={<TbDotsVertical />} btnVariant="outline">
            <Menu.Item asChild>
              <UpdateDataModal />
            </Menu.Item>
            <Menu.Item asChild>
              <UpdatePasswordModal />
            </Menu.Item>
            <Menu.Item asChild>
              <DeleteAccountModal {...{ createdAt }} />
            </Menu.Item>
          </MenuWrapper>
        </div>
      </div>
    </CustomContainer>
  );
}
