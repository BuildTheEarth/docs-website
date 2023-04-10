import { Accordion } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";
import NavbarItem from "./NavbarItem";
import React from "react";

const NavbarRoot = (props: any) => {
  return (
    <Accordion
      pt={60}
      defaultValue={
        window.location.pathname
          .split("/")
          .slice(0, 2 + 1)
          .join("/") + "/"
      }
      style={{ height: "100vh" }}
    >
      {props.sidebar.map((element: any) => (
        <Accordion.Item
          value={element.href}
          style={{ border: "none" }}
          key={element.href}
        >
          <Accordion.Control chevron={element.type == "link" && "ㅤ"}>
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
  );
};

export default NavbarRoot;
