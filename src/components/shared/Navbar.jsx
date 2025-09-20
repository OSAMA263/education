import { useRef } from "react";
import CustomContainer from "../layout/CustomContainer";
import Logo from "../Logo";
import MenuWrapper from "../MenuWrapper";
import NavLinks, { nav_links } from "../NavLinks";
import ThemeToggler from "../ThemeToggler";
import UserNavbarMenu from "../UserNavbarMenu";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Menu } from "@chakra-ui/react";

export default function Navbar() {
  const ref = useRef(null);
  
  return (
    <header
      ref={ref}
      className="border-b z-50 border-bg-gray py-7 bg-bg-secondary !transition-all absolute min-w-dvw !duration-300"
    >
      <CustomContainer className="!py-0 !space-y-0 min-h-fit">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MenuWrapper
              ref={ref}
              className={"!w-[97%]"}
              btnVariant="surface"
              openBtnIcon={<IoMenu />}
            >
              {nav_links.map(({ label, link }) => (
                <Menu.Item asChild key={label}>
                  <NavLink to={link}>{label}</NavLink>
                </Menu.Item>
              ))}
            </MenuWrapper>
            <Logo />
          </div>
          {/* navigation links */}
          <NavLinks className="max-md:hidden" />
          {/* theme toggler & profile options */}
          <div className="flex items-center gap-4">
            <ThemeToggler />
            {/* user options */}
            <UserNavbarMenu />
          </div>
        </nav>
      </CustomContainer>
    </header>
  );
}
