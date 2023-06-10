import { Accordion, useMantineTheme } from "@mantine/core";

import React from "react";
import { highlightLink } from "@site/src/util/nav";
import { useSidebarBreadcrumbs } from "@docusaurus/theme-common/internal";

const NavbarItem = (props: any) => {
  const theme = useMantineTheme();
  const breadcrumbs = useSidebarBreadcrumbs();
  const bcLinks = breadcrumbs.map((bc) => bc.href);
  return (
    <Accordion
      multiple
      defaultValue={[
        window.location.pathname
          .split("/")
          .slice(0, props.depth + 1)
          .join("/") + (props.depth >= 3 ? "/" : ""),
        bcLinks[props.depth - 2],
      ]}
    >
      {props.items.map((element: any) => (
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
                element.href,
                breadcrumbs
              )
                ? theme.colorScheme == "dark"
                  ? theme.colors.dark[5]
                  : theme.colors.gray[1]
                : undefined,
            }}
            onClick={(e) =>
              element.type == "link"
                ? (window.location.href = element.href)
                : undefined
            }
          >
            <div onClick={(e) => (window.location.href = element.href)}>
              {element.label}
            </div>
          </Accordion.Control>
          {element.type != "link" && (
            <Accordion.Panel>
              <NavbarItem {...element} depth={props.depth + 1} />
            </Accordion.Panel>
          )}
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
export default NavbarItem;
