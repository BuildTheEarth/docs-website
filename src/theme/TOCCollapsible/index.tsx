import { Accordion, Group, MediaQuery, Text } from "@mantine/core";

import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { IconList } from "@tabler/icons";
import React from "react";
import { TableOfContents } from "@site/src/components/TOC";

export default function TOCCollapsile({ className, ...props }) {
  const links = props.toc.map((l) => ({
    label: l.value,
    link: "#" + l.id,
    order: l.level,
  }));

  if (!ExecutionEnvironment.canUseDOM) return <></>;
  else
    return (
      <MediaQuery largerThan={997} styles={{ display: "none" }}>
        <Accordion variant="contained">
          <Accordion.Item value="toc">
            <Accordion.Control>
              <Group>
                <IconList size={18} stroke={1.5} />
                <Text>Table of contents</Text>
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              <TableOfContents
                active={
                  "#" + window.location.href.split("#")[1] || links[0].link
                }
                links={links}
                displayTitle={false}
              ></TableOfContents>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </MediaQuery>
    );
}
