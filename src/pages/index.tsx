import {
  ActionIcon,
  BackgroundImage,
  Box,
  Button,
  Center,
  Grid,
  MediaQuery,
  Title,
  useMantineTheme,
} from "@mantine/core";

import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import Header from "../components/Header";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Page from "../components/Page";
import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  if (ExecutionEnvironment.canUseDOM) {
    //@ts-ignore
    if (window.netlifyIdentity) {
      //@ts-ignore
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          //@ts-ignore
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }
  return (
    <>
      <header className={clsx("hero hero--primary")}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Docusaurus Tutorial - 5min ⏱️
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default function Home(): JSX.Element {
  const theme = useMantineTheme();
  const { siteConfig }: any = useDocusaurusContext();
  return (
    <Page fullWidth>
      <BackgroundImage
        src="/images/placeholder.png"
        style={{ height: "100vh", width: "100%" }}
        mb="0"
      >
        <Center
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#00000044",
            padding: 16,
          }}
        >
          <Title
            style={{ color: "#ffffff", fontSize: 64 }}
            align="center"
            order={1}
          >
            {siteConfig.title}
            <br />
            <Button
              variant="outline"
              size="xl"
              style={{
                color: "white",
                borderColor: "white",
                borderWidth: 3,
                marginTop: theme.spacing.xl * 1.5,
              }}
              onClick={() =>
                (window.location.href =
                  siteConfig.themeConfig.navbar.items[0].to)
              }
            >
              {siteConfig.tagline}
            </Button>
          </Title>
        </Center>
      </BackgroundImage>
    </Page>
  );
}
