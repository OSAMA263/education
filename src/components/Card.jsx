import { Box } from "@chakra-ui/react";

export default function Card({ children, className }) {
  return (
    <Box
      _dark={{ bg: "gray.800" }}
      className={
        "space-y-3 border rounded-2xl border-bg-gray px-6 py-8 flex flex-col " +
        className
      }
    >
      {children}
    </Box>
  );
}
