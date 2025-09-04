import { Field, Portal, Select } from "@chakra-ui/react";

export default function FormSelect({ inpProps, register, errors }) {
  return (
    <Field.Root invalid={errors[inpProps.name]}>
      <Field.Label>{inpProps.label}</Field.Label>
      <Select.Root collection={inpProps.options} {...register(inpProps.name)}>
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select option" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {inpProps.options.items.map((item) => (
                <Select.Item key={item.value} item={item}>
                  {item.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
      <Field.ErrorText>{errors[inpProps.name]?.message}</Field.ErrorText>
    </Field.Root>
  );
}
