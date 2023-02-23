import { ActionIcon, useMantineTheme } from "@mantine/core";

import { IconChevronUp } from "@tabler/icons";
import React from "react";
import { translate } from "@docusaurus/Translate";
import { useBackToTopButton } from "@docusaurus/theme-common/internal";

export default function BackToTopButton() {
  const theme = useMantineTheme();
  const { shown, scrollToTop } = useBackToTopButton({ threshold: 10 });
  return (
    <ActionIcon
      color="blue"
      size="xl"
      variant="default"
      style={{
        zIndex: 100,
        position: "fixed",
        bottom: theme.spacing.xl,
        right: theme.spacing.xl,
        opacity: shown ? 1 : 0,
        transition: "opacity ease-out 0.1s",
      }}
      aria-label={translate({
        id: "theme.BackToTopButton.buttonAriaLabel",
        message: "Scroll back to top",
        description: "The ARIA label for the back to top button",
      })}
      onClick={scrollToTop}
    >
      <IconChevronUp />
    </ActionIcon>
  );
}
