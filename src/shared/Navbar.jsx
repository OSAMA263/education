import { Container, IconButton, Menu, Portal } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun, FaUser } from "react-icons/fa";
import { useColorMode } from "../components/ui/color-mode";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="!border-b-2 !py-5 bg-bg-secondary !transition-all !duration-300">
      <Container
        as="nav"
        maxW="90vw"
        className="flex items-center justify-between"
      >
        <NavLink to="/">logo</NavLink>
        {/* navigation links */}
        <ul className="flex items-center gap-6">
          {nav_links.map(({ label, link }) => (
            <li key={label}>
              <NavLink to={link}>{label}</NavLink>
            </li>
          ))}
        </ul>
        {/* theme toggler & profile options */}
        <ThemToggler_ProfileOptions />
      </Container>
    </header>
  );
}

const ThemToggler_ProfileOptions = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="flex items-center gap-4">
      {/* <Switch.Root colorPalette="white" size="lg">
            <Switch.HiddenInput />
            <Switch.Control>
              <Switch.Thumb />
              <Switch.Indicator fallback={<Icon as={FaMoon} />}>
                <Icon as={FaSun} color="yellow.400" />
              </Switch.Indicator>
            </Switch.Control>
          </Switch.Root> */}
      <IconButton
        size={"sm"}
        onClick={toggleColorMode}
        rounded={"xl"}
        bg="gray.600"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={colorMode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {colorMode === "light" ? (
              <FaMoon />
            ) : (
              <FaSun className="text-yellow-300" />
            )}
          </motion.span>
        </AnimatePresence>
      </IconButton>
      {/* profile menu */}
      <Menu.Root>
        <Menu.Trigger asChild>
          <IconButton size={"sm"} rounded={"xl"}>
            <FaUser />
          </IconButton>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content className="!border ">
              <Menu.Item asChild>
                <NavLink to="/sd" className="hover:bg-gray-400 !cursor-pointer">
                  ypo
                </NavLink>
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </div>
  );
};

const profile_links = [
  { label: "", link: "" },
  { label: "", link: "" },
  { label: "", link: "" },
];

export const nav_links = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Lessons", link: "/lessons" },
  { label: "Exams", link: "/exams" },
];
