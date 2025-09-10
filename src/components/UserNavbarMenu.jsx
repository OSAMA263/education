import { Menu } from "@chakra-ui/react";
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
import MenuWrapper from "./MenuWrapper";

export default function UserNavbarMenu() {
  const { userData } = useProfile();

  const userOptions = () => {
    const links = userData.role === "user" ? student_options : admin_options;
    const arr = [...links];
    return arr;
  };

  return (
    <MenuWrapper
      openBtnIcon={<FaUser />}
      btnStyles="!rounded-xl"
      className="border border-bg-gray [&_svg]:text-xl"
    >
      <Menu.ItemGroupLabel>
        Logged in as {userData.fullName}
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
      <Menu.Item color={"red.500"} onClick={logout}>
        <IoExitOutline /> Logout
      </Menu.Item>
    </MenuWrapper>
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
