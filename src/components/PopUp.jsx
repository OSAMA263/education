import { Button, Popover, Portal } from "@chakra-ui/react";

export default function PopUp({ setOpen, open, children, btnContent = "yo" }) {
  return (
    <Popover.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Popover.Trigger asChild>
        <Button size="xs" className="!border-0" variant={"outline"}>
          {btnContent}
        </Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content className="!w-fit">
            <Popover.Body>{children}</Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
