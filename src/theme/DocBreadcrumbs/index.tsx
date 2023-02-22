import { Anchor, Breadcrumbs } from "@mantine/core";
import {
  useHomePageRoute,
  useSidebarBreadcrumbs,
} from "@docusaurus/theme-common/internal";

import { IconHome } from "@tabler/icons";
import React from "react";

export default function DocBreadcrumbs() {
  const breadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();
  if (!breadcrumbs) {
    return null;
  }
  return (
    <Breadcrumbs>
      <Anchor href={"/docs"}>
        <IconHome color="white" size={18} />
      </Anchor>
      {breadcrumbs.map((item, idx) => (
        <Anchor href={item.href} key={idx}>
          {item.label}
        </Anchor>
      ))}
    </Breadcrumbs>
  );
}
