import { Button, Menu, Portal } from "@chakra-ui/react";

export default function MenuWrapper({
  className,
  children,
  openBtnText,
  openBtnIcon,
  btnStyles,
  btnVariant = "solid",
}) {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          size="sm"
          p={0}
          outline={0}
          rounded={"xl"}
          variant={btnVariant}
          aria-label="open-menu"
          className={btnStyles}
        >
          {openBtnIcon}
          {openBtnText}
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content className={className}>
            <Menu.ItemGroup>{children}</Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
