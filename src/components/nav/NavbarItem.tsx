import { Accordion, useMantineTheme } from "@mantine/core";

import React from "react";

const NavbarItem = (props: any) => {
  const theme = useMantineTheme();
  return (
    <Accordion
      defaultValue={
        window.location.pathname
          .split("/")
          .slice(0, props.depth + 1)
          .join("/") + "/"
      }
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
              backgroundColor:
                (window.location.pathname + "/").replace("//", "/") ==
                element.href
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
            {element.label}
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
