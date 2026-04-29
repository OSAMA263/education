import CustomContainer from "@/components/layout/CustomContainer";
import { ImUser, ImUserTie } from "react-icons/im";
import MenuWrapper from "@/components/MenuWrapper";
import { TbDotsVertical } from "react-icons/tb";
import { Menu } from "@chakra-ui/react";
import UpdateDataModal from "./modals/UpdateDataModal";
import UpdatePasswordModal from "./modals/UpdatePasswordModal";
import { useAuthData } from "@/routes/AuthProvider";
import Loader from "@/components/Loader";
import SEOWrapper from "@/components/layout/SEOWrapper";
import Modal from "@/components/Modal";
import ExamsSubmited from "./modals/ExamsSubmited";

export default function UserPage() {
  return (
    <CustomContainer>
      <ProfileContent />
    </CustomContainer>
  );
}

export const ProfileContent = () => {
  const { profile } = useAuthData();
  const {
    fullName,
    email,
    role,
    phoneNumber,
    created_at,
    classLevel,
    exams,
  } = profile || {};

  const userDetails = [
    { label: "Email", value: email },
    { label: "Phone", value: phoneNumber },
    {
      label: "Member Since",
      value: created_at
        ? new Date(created_at).toLocaleDateString("en-GB")
        : null,
    },
    { label: "Class Level", value: classLevel },
  ];

  return (
    <SEOWrapper
      des="View and manage your personal information, progress, and saved lessons. Customize your learning experience, track completed topics, and update your account details all in one place."
      link="user"
      title="My Profile"
    >
      <h1 className="text-2xl font-semibold text-center">
        My Profile
      </h1>
      <div className="lg:min-w-3xl min-w-full mx-auto p-20 bg-bg-gray rounded-xl flex flex-col items-center gap-20 relative border border-secondary/50">
        {/* name & role */}
        {!profile ? (
          <Loader />
        ) : (
          <>
            <div className="flex flex-col items-center">
              <div className="mb-6 text-4xl">
                {role === "admin" ? <ImUserTie /> : <ImUser />}
              </div>
              <h1 className="text-xl font-bold">{fullName}</h1>
              <p className="text-secondary">{role}</p>
            </div>
            {/* more details */}
            <div className="w-full grid sm:grid-cols-2 gap-4">
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
                  ),
              )}
            </div>
            {/* user options*/}
            <div className="top-2 right-2 !absolute">
              <MenuWrapper
                openBtnIcon={<TbDotsVertical />}
                btnVariant="outline"
              >
                <Menu.Item asChild>
                  <UpdateDataModal />
                </Menu.Item>
                <Menu.Item asChild>
                  <UpdatePasswordModal />
                </Menu.Item>
                {exams?.length > 0 && (
                  <Menu.Item asChild>
                    <ExamsSubmited />
                  </Menu.Item>
                )}
              </MenuWrapper>
            </div>
          </>
        )}
      </div>
    </SEOWrapper>
  );
};
