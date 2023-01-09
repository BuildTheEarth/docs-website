import { Button, Center, Title, useMantineTheme } from "@mantine/core";
import Translate, { translate } from "@docusaurus/Translate";

import Page from "../components/Page";
import { PageMetadata } from "@docusaurus/theme-common";
import React from "react";

export default function ErrorPage() {
  const theme = useMantineTheme();
  const status = {
    code: 404,
    title: "Not Found",
    message:
      "We can't find the page you're looking for. Please check the URL and try again.",
  };
  return (
    <BrowserOnly>
      <>
        <PageMetadata
          title={translate({
            id: "theme.NotFound.title",
            message: "Page Not Found",
          })}
        />
        <Page fullWidth>
          <div
            style={{
              width: "100%",
              position: "relative",
            }}
          >
            <div
              style={{
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
                background: `url("/images/placeholder.png")`,
                filter: "brightness(0.5)",
                width: "100%",
                height: "calc(100vh - 60px)",
                marginTop: 60,
              }}
            ></div>
            <Center
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <div>
                <Title
                  style={{ color: "#ffffff", fontSize: 220 }}
                  align="center"
                  order={1}
                >
                  404
                </Title>
                <Title style={{ color: "#ffffff" }} align="center" order={1}>
                  <Translate
                    id="theme.NotFound.title"
                    description="The title of the 404 page"
                  >
                    {status.title}
                  </Translate>
                </Title>
                <Title
                  style={{ color: theme.colors.gray[4] }}
                  align="center"
                  order={3}
                >
                  <Translate
                    id="theme.NotFound.p1"
                    description="The first paragraph of the 404 page"
                  >
                    {status.message}
                  </Translate>
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
                    onClick={() => window.history.back()}
                  >
                    <Translate
                      id="theme.NotFound.p2"
                      description="The 2nd paragraph of the 404 page"
                    >
                      Back
                    </Translate>
                  </Button>
                </Title>
              </div>
            </Center>
          </div>
        </Page>
      </>
    </BrowserOnly>
  );
}
