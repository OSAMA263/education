import { logout } from "@/utils/utils";
import { Button, Drawer, Portal } from "@chakra-ui/react";
import { useState } from "react";
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
import { IoMenu } from "react-icons/io5";

export default function Sidebar({ smolScreen }) {
  const [open, setOpen] = useState(true);

  return (
    <>
      {smolScreen && (
        <Button
          className="!absolute !right-0 z-10 mt-1 mr-1"
          variant={"surface"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <IoMenu />
        </Button>
      )}

      <Drawer.Root
        closeOnInteractOutside={smolScreen}
        modal={false}
        open={smolScreen?open:true}
        onOpenChange={(e) => setOpen(e.open)}
        placement="start"
      >
        <Portal>
          <Drawer.Positioner className="!w-fit" pointerEvents="none">
            <Drawer.Content className="pe-1 justify-between">
              <div className="flex flex-col">
                <h1 className="py-7 px-4 font-semibold">Admin Dahsboard</h1>
                {/* navigate tabs */}
                <NavigateTabs />
              </div>

              <Button color={"red.500"} variant={"surface"} onClick={logout}>
                <IoExitOutline /> Logout
              </Button>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
}

const NavigateTabs = () => {
  const { pathname } = useLocation();

  return navigationLinks.map(({ label, link, icon: Icon }) => (
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
  ));
};

const navigationLinks = [
  { label: "Base", link: "/dashboard/base", icon: FaHome },
  { label: "Admins", link: "/dashboard/admins", icon: FaUserTie },
  { label: "Students", link: "/dashboard/students", icon: FaUserGraduate },
  { label: "Lessons", link: "/dashboard/lessons", icon: FaBookOpen },
  { label: "Exams", link: "/dashboard/exams", icon: FaPen },
  { label: "My Profile", link: "/dashboard/profile", icon: FaRegUserCircle },
];
