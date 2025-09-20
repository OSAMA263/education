import { AnimatePresence, motion } from "framer-motion";
import { useColorMode } from "./ui/color-mode";
import { IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      size={"sm"}
      onClick={toggleColorMode}
      rounded={"xl"}
      bg="gray.600"
      aria-label="toggle-color-mode"
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
  );
}
