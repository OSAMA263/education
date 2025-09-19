import { Alert } from "@chakra-ui/react";

export default function CustomAlert({ status = "info", title, des }) {
  return (
    <Alert.Root rounded={"xl"} status={status}>
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>{title}</Alert.Title>
        <Alert.Description>{des} </Alert.Description>
      </Alert.Content>
    </Alert.Root>
  );
}
