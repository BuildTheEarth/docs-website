import {
  IconAlertCircle,
  IconAlertTriangle,
  IconBulb,
  IconFlame,
  IconInfoCircle,
} from "@tabler/icons";

import { Alert } from "@mantine/core";
import React from "react";
import { ThemeClassNames } from "@docusaurus/theme-common";
import Translate from "@docusaurus/Translate";
import clsx from "clsx";

const AdmonitionConfigs = {
  note: {
    iconComponent: <IconInfoCircle size={16} />,
    label: "Note",
    color: "gray",
  },
  tip: {
    iconComponent: <IconBulb size={16} />,
    label: "Tip",
    color: "green",
  },
  danger: {
    iconComponent: <IconFlame size={16} />,
    label: "Danger",
    color: "red",
  },
  info: {
    iconComponent: <IconInfoCircle size={16} />,
    label: "Info",
    color: "blue",
  },
  caution: {
    iconComponent: <IconAlertTriangle size={16} />,
    label: "Caution",
    color: "orange",
  },
};
// Legacy aliases, undocumented but kept for retro-compatibility
const aliases = {
  secondary: "note",
  important: "info",
  success: "tip",
  warning: "danger",
};
function getAdmonitionConfig(unsafeType) {
  const type = aliases[unsafeType] ?? unsafeType;
  const config = AdmonitionConfigs[type];
  if (config) {
    return config;
  }
  console.warn(
    `No admonition config found for admonition type "${type}". Using Info as fallback.`
  );
  return AdmonitionConfigs.info;
}
// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children) {
  const items = React.Children.toArray(children);
  const mdxAdmonitionTitle = items.find(
    (item) =>
      React.isValidElement(item) && item.props?.mdxType === "mdxAdmonitionTitle"
  );
  const rest = <>{items.filter((item) => item !== mdxAdmonitionTitle)}</>;
  return {
    mdxAdmonitionTitle,
    rest,
  };
}
function processAdmonitionProps(props) {
  const { mdxAdmonitionTitle, rest } = extractMDXAdmonitionTitle(
    props.children
  );
  return {
    ...props,
    title: props.title ?? mdxAdmonitionTitle,
    children: rest,
  };
}
export default function Admonition(props) {
  const {
    children,
    type,
    title,
    icon: iconProp,
  } = processAdmonitionProps(props);
  const typeConfig = getAdmonitionConfig(type);
  const titleLabel = title || typeConfig.label;
  console.log(titleLabel);
  const { iconComponent } = typeConfig;
  const icon = iconProp ?? iconComponent;
  return (
    <Alert icon={icon} title={titleLabel} color={typeConfig.color} mb="md">
      {children}
    </Alert>
  );
}
