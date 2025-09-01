import { Container } from "@chakra-ui/react";

export default function CustomContainer({ maxW = "80vw", children, ...props }) {
  return (
    <Container maxW={maxW} className="py-28 space-y-32" {...props}>
      {children}
    </Container>
  );
}
