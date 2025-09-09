import { IconButton, Menu, Portal } from "@chakra-ui/react";
import {
  FaUser,
  FaRegUserCircle,
  FaShoppingCart,
  FaChartPie,
} from "react-icons/fa";
import { Link } from "react-router";
import { IoExitOutline } from "react-icons/io5";
import { logout } from "@/utils/utils";
import { useProfile } from "@/routes/AuthProvider";

export default function UserNavbarMenu() {
  const { profile } = useProfile();

  const userOptions = () => {
    const links = profile.role === "user" ? student_options : admin_options;
    const arr = [...links];
    return arr;
  };

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <IconButton size={"sm"} rounded={"xl"}>
          <FaUser />
        </IconButton>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content className="border border-bg-gray">
            <Menu.ItemGroup className="[&_svg]:text-xl">
              <Menu.ItemGroupLabel>
                Logged in as {profile.fullName}
              </Menu.ItemGroupLabel>
              <Menu.Separator opacity={0.2} />
              {/* user options */}
              {userOptions().map(({ label, link, icon: Icon }) => (
                <Menu.Item asChild key={label}>
                  <Link to={link}>
                    <Icon /> {label}
                  </Link>
                </Menu.Item>
              ))}
              <Menu.Separator opacity={0.2} />
              <Menu.Item className="!text-red-400" onClick={logout}>
                <IoExitOutline /> Logout
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

const student_options = [
  { label: "Profile", link: "/user", icon: FaRegUserCircle },
  { label: "Cart", link: "/user/cart", icon: FaShoppingCart },
];

const admin_options = [
  { label: "Profile", link: "/user", icon: FaRegUserCircle },
  { label: "dashboard", link: "/dashboard", icon: FaChartPie },
];
