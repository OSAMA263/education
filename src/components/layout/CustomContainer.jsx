import { Container } from "@chakra-ui/react";

export default function CustomContainer(props) {
  const { base, sm, md, lg, xl, children, className, ...rest } = props;

  const defaultMaxW = {
    base: "100%",
    md: "80%",
    lg: "75%",
    xl: "75%",
  };

  return (
    <Container
      maxW={{
        ...defaultMaxW,
        ...(base && { base }),
        ...(sm && { sm }),
        ...(md && { md }),
        ...(lg && { lg }),
        ...(xl && { xl }),
      }}
      className={
        "py-32 space-y-28 min-h-dvh flex flex-col justify-center " + className
      }
      {...rest}
    >
      {children}
    </Container>
  );
}
