import { Accordion, Center, Group, useMantineTheme } from "@mantine/core";

import { IconChevronDown } from "@tabler/icons";
import NavbarItem from "./NavbarItem";
import React from "react";
import { highlightLink } from "@site/src/util/nav";
import { useSidebarBreadcrumbs } from "@docusaurus/theme-common/internal";

const NavbarRoot = (props: any) => {
  const breadcrumbs = useSidebarBreadcrumbs();
  const bcLinks = breadcrumbs.map((bc) => bc.href);
  const theme = useMantineTheme();
  return (
    <>
      <Center>
        <Group
          spacing={5}
          onClick={() => (window.location.href = "/")}
          style={{
            height: 60,
            fontFamily: "Minecraft",
            fontSize: "20px",
            position: "relative",
            top: "2px",
            cursor: "pointer",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
        >
          <img
            src="/logo.png"
            alt={"BuildTheEarth"}
            height="40"
            style={{ marginRight: "4px", position: "relative", top: "-2px" }}
          />
          {"BuildTheEarth"}
        </Group>
      </Center>
      <Accordion
        defaultValue={[
          window.location.pathname.includes("/category/")
            ? bcLinks[0]
            : "/docs/category/" + window.location.pathname.split("/")[2],
        ]}
        multiple
      >
        {props.sidebar.map((element: any) => (
          <Accordion.Item
            value={element.href}
            style={{ border: "none" }}
            key={element.href}
          >
            <Accordion.Control
              chevron={element.type == "link" && "ㅤ"}
              style={{
                backgroundColor: highlightLink(
                  window.location.pathname,
                  element.href,breadcrumbs
                )
                  ? theme.colorScheme == "dark"
                    ? theme.colors.dark[5]
                    : theme.colors.gray[1]
                  : undefined,
              }}
            >
              <div onClick={(e) => (window.location.href = element.href)}>
                {element.label}
              </div>
            </Accordion.Control>
            {element.type != "link" && (
              <Accordion.Panel>
                <NavbarItem {...element} depth={3} />
              </Accordion.Panel>
            )}
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default NavbarRoot;
