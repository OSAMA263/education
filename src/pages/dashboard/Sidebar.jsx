import { logout } from "@/utils/utils";
import { Button } from "@chakra-ui/react";
import {
  FaHome,
  FaBookOpen,
  FaPen,
  FaUserGraduate,
  FaUserTie,
  FaRegUserCircle,
} from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className="sticky left-0 top-0 h-screen overflow-x-hidden bg-bg-secondary w-fit flex flex-col justify-between z-10">
      {/* navigate tabs */}
      <div className="flex flex-col">
        <h1 className="py-6 text-center font-semibold text-xl">Options</h1>
        {navigationLinks.map(({ label, link, icon: Icon }) => (
          <Button
            variant={link === pathname ? "solid" : "surface"}
            className="!justify-start"
            rounded={"none"}
            asChild
            key={label}
          >
            <NavLink to={link}>
              <Icon /> {label}
            </NavLink>
          </Button>
        ))}
      </div>

      <Button color={"red.500"} variant={"surface"} onClick={logout}>
        <IoExitOutline /> Logout
      </Button>
    </div>
  );
}

const navigationLinks = [
  { label: "Base", link: "/dashboard/base", icon: FaHome },
  { label: "Admins", link: "/dashboard/admins", icon: FaUserTie },
  { label: "Students", link: "/dashboard/students", icon: FaUserGraduate },
  { label: "Lessons", link: "/dashboard/lessons", icon: FaBookOpen },
  { label: "Exams", link: "/dashboard/exams", icon: FaPen },
  { label: "My Profile", link: "/dashboard/profile", icon: FaRegUserCircle },
];
