import { Container } from "@chakra-ui/react";

export default function LayoutMain(props) {
  const { maxW = "80vw", children, className, ...rest } = props;

  return (
    <Container
      maxW={maxW}
      className={
        "py-32 space-y-28 min-h-dvh flex flex-col justify-center " + className
      }
      {...rest}
    >
      {children}
    </Container>
  );
}
