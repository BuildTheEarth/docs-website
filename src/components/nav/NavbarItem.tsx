import { Accordion } from "@mantine/core";
import React from "react";

const NavbarItem = (props: any) => {
  return (
    <Accordion>
      {props.items.map((element: any) => (
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
export default NavbarItem;
