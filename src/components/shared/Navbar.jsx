import CustomContainer from "../layout/CustomContainer";
import Logo from "../Logo";
import NavLinks from "../NavLinks";
import ThemeToggler from "../ThemeToggler";
import UserNavbarMenu from "../UserNavbarMenu";

export default function Navbar() {
  return (
    <header className="border-b z-50 border-bg-gray py-7 bg-bg-secondary !transition-all absolute w-full !duration-300">
      <CustomContainer className="!py-0 !space-y-0 min-h-fit">
        <nav className="flex items-center justify-between">
          <Logo />
          {/* navigation links */}
          <NavLinks />
          {/* theme toggler & profile options */}
          <div className="flex items-center gap-4">
            <ThemeToggler />
            {/* user options */}
            <UserNavbarMenu/>
          </div>
        </nav>
      </CustomContainer>
    </header>
  );
}
