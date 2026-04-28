import { Container } from "@chakra-ui/react";
import { useLocation } from "react-router";
import ReportForm from "../forms/ReportProblem";

export default function CustomContainer(props) {
  const {
    base,
    sm,
    md,
    lg,
    xl,
    children,
    className,
    noContactForm,
    ...rest
  } = props;
  const defaultMaxW = {
    base: "100%",
    md: "90%",
    lg: "80%",
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
        "py-40 space-y-28 min-h-dvh flex flex-col justify-center " +
        className
      }
      {...rest}
    >
      {children}
      {!noContactForm && <ReportForm />}
    </Container>
  );
}
