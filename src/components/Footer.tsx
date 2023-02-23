import {
  ActionIcon,
  Anchor,
  Container,
  Group,
  Menu,
  createStyles,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";

import React from "react";

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : "#eaeaea"
    }`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : "#fafafa",
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterSimpleProps {
  links: { link: string; label: string }[];
  style?: React.CSSProperties;
  copyright?: string;
}

export default function Footer({ links, style, copyright }: FooterSimpleProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<"a">
      color="dimmed"
      key={link.label}
      href={link.link}
      target="_blank"
      size="sm"
      variant="text"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer} style={style}>
      <Container className={classes.inner} size={"xl"}>
        <Anchor<"a"> style={{ fontSize: "14px" }} color="#666" variant="text">
          {copyright || "Copyright BuildTheEarth Community."}
        </Anchor>
        <Group className={classes.links}>
          {items}
          <ActionIcon
            variant="transparent"
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {colorScheme == "dark" ? (
              <IconSun size={18} />
            ) : (
              <IconMoonStars size={18} />
            )}
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
