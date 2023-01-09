import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Burger,
  Button,
  Container,
  Divider,
  Group,
  Indicator,
  Header as MantineHeader,
  Menu,
  Paper,
  Text,
  Transition,
  UnstyledButton,
  createStyles,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import {
  ChevronDown,
  FileSearch,
  FileUpload,
  Logout,
  MoonStars,
  Sun,
  World,
} from "tabler-icons-react";
import { IconMoonStars, IconSun } from "@tabler/icons";
import React, { CSSProperties, useEffect, useState } from "react";
import { useClickOutside, useDisclosure, useInterval } from "@mantine/hooks";

import clsx from "clsx";

const useStyles = createStyles((theme) => ({
  root: {
    zIndex: 99,
  },

  dropdown: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",
    boxShadow: theme.shadows.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },

  logo: {
    fontFamily: "Minecraft",
    fontSize: "20px",
    position: "relative",
    top: "2px",
    cursor: "pointer",
    userSelect: "none",
    WebkitUserSelect: "none",
    img: {
      position: "relative",
      top: "-2px",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : "#666",
    fontSize: theme.fontSizes.sm,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : "#000",
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2],
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : "#000",
    },
  },

  userMenu: {
    border: "none !important",
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  userActive: {
    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2],
    },
  },

  user: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    marginLeft: theme.spacing.xs,
    transition: "background-color 100ms ease",
    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
      margin: 0,
      width: "100%",
    },
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

interface HeaderProps {
  links: {
    link: string;
    label: string;
  }[];
  className?: string;
}

const Header = ({ links, className }: HeaderProps) => {
  const [opened, handler] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const dark = colorScheme === "dark";
  const mobilePaperRef = useClickOutside(() => handler.close());

  const items = links.map((link) => (
    <a
      key={link.label}
      id={link.label}
      className={cx(classes.link)}
      onClick={() => {
        window.location.href = link.link;
        handler.close();
      }}
    >
      {link.label}
    </a>
  ));
  return (
    <MantineHeader height={60} className={clsx(classes.root, className)} fixed>
      <Container className={classes.header} size={"xl"}>
        <Group
          spacing={5}
          className={classes.logo}
          onClick={() => (window.location.href = "/")}
        >
          <img
            src="/logo.gif"
            alt="Mantine"
            height="40"
            style={{ marginRight: "4px" }}
          />
          BuildTheEarth Documentation
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Group spacing={5} className={classes.links}></Group>

        <Group spacing={5} className={classes.burger}>
          <Burger opened={opened} onClick={() => handler.open()} size="sm" />
        </Group>

        <Transition transition="scale-y" duration={200} mounted={opened}>
          {(styles: CSSProperties) => (
            <Paper
              className={classes.dropdown}
              withBorder
              style={styles}
              ref={mobilePaperRef}
            >
              {items}
            </Paper>
          )}
        </Transition>
        <div></div>
      </Container>
    </MantineHeader>
  );
};

export default Header;
