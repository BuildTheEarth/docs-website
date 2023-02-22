import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useColorScheme, useHotkeys, useLocalStorage } from "@mantine/hooks";

import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import React from "react";

export default function Root({ children }) {
  const preferredColorScheme = useColorScheme("dark");
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "scheme",
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) => {
    const newTheme = value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    window.location.reload();
  };

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  if (!ExecutionEnvironment.canUseDOM) return <></>;
  else
    return (
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
            fontFamily:
              '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          {children}
        </MantineProvider>
      </ColorSchemeProvider>
    );
}
