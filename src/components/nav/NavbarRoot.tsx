import { Accordion } from "@mantine/core";
import NavbarItem from "./NavbarItem";
import React from "react";

const NavbarRoot = (props: any) => {
  return (
    <Accordion mt={120} defaultValue={props.path}>
      {props.sidebar.map((element: any) => (
        <Accordion.Item value={element.href}>
          <Accordion.Control
            chevron={element.type == "link" && "ㅤ"}
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
              <NavbarItem {...element} />
            </Accordion.Panel>
          )}
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default NavbarRoot;
