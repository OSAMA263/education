import { Button, Menu, Portal } from "@chakra-ui/react";

export default function MenuWrapper({
  className,
  children,
  openBtnText,
  openBtnIcon,
  btnStyles,
  btnVariant = "solid",
  ref,
}) {
  const getAnchorRect = () => ref && ref.current.getBoundingClientRect();

  return (
    <Menu.Root positioning={{ getAnchorRect }}>
      <Menu.Trigger asChild>
        <Button
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
        <Menu.Positioner className={className}>
          <Menu.Content>
            <Menu.ItemGroup>{children}</Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
