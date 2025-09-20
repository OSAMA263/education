import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import React from "react";

export default function Modal(props) {
  const {
    openModalContent,
    openBtnClasses = "",
    openBtnIcon,
    title,
    children,
    open,
    setOpen,
    btnVariant = "outline",
    ...rest
  } = props;

  return (
    <>
      <Dialog.Root
        lazyMount
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        role="alertdialog"
        size={"lg"}
        placement={"center"}
        {...rest}
      >
        <Dialog.Trigger asChild>
          <Button
            p={0}
            outline={0}
            variant={btnVariant}
            className={`w-full ${openBtnClasses}`}
          >
            {openBtnIcon}
            {openModalContent}
          </Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content p={10} gap={10}>
              
              <Dialog.Header justifyContent={"center"}>
                <Dialog.Title className="!text-bold lg:!text-3xl ">
                  {title}
                </Dialog.Title>
              </Dialog.Header>

              <Dialog.Body className="!space-y-2">{children}</Dialog.Body>

              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
}
