import React from "react";
import TOCItems from "@theme/TOCItems";
import { TableOfContents } from "@site/src/components/TOC";
import clsx from "clsx";
import styles from "./styles.module.css";
// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = "table-of-contents__link toc-highlight";
const LINK_ACTIVE_CLASS_NAME = "table-of-contents__link--active";
export default function TOC({ className, ...props }) {
  const links = props.toc.map((l) => ({
    label: l.value,
    link: "#" + l.id,
    order: l.level,
  }));
  return (
    <div style={{ position: "sticky", top: 70 }}>
      <TableOfContents
        active={"#" + window.location.href.split("#")[1] || links[0].link}
        links={links}
      ></TableOfContents>
    </div>
  );
}
