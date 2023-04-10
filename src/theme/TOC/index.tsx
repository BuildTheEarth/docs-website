import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import React from "react";
import TOCItems from "@theme/TOCItems";
import { TableOfContents } from "@site/src/components/TOC";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function TOC({ className, ...props }) {
  const links = props.toc.map((l) => ({
    label: l.value,
    link: "#" + l.id,
    order: l.level,
  }));

  if (!ExecutionEnvironment.canUseDOM) return <></>;
  else
    return (
      <div style={{ position: "sticky", top: 70 }}>
        <TableOfContents
          active={"#" + window.location.href.split("#")[1] || links[0].link}
          links={links}
        ></TableOfContents>
      </div>
    );
}
