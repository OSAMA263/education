"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
} from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";

export const system = createSystem(defaultConfig, {
  preflight: false,
});

export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
