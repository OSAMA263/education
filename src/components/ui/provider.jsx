"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
  defineSlotRecipe,
} from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";

export const buttonRecipe = defineSlotRecipe({
  defaultVariants: {
    size: { base: "xs", lg:"md",xl:"lg"},
  },
});

const config = defineConfig({
  theme: {
    recipes: {
      button: buttonRecipe,
    },
  },
  preflight: false,
});

export const system = createSystem(defaultConfig, config);

export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
