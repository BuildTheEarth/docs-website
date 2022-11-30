import Highlight, { defaultProps } from "prism-react-renderer";
import {
  containsLineNumbers,
  parseCodeBlockTitle,
  parseLanguage,
  parseLines,
  useCodeWordWrap
} from "@docusaurus/theme-common/internal";
import { usePrismTheme, useThemeConfig } from "@docusaurus/theme-common";

import Container from "@theme/CodeBlock/Container";
import CopyButton from "@theme/CodeBlock/CopyButton";
import Line from "@theme/CodeBlock/Line";
import { Prism } from "@mantine/prism";
import React from "react";
import WordWrapButton from "@theme/CodeBlock/WordWrapButton";
import clsx from "clsx";

export default function CodeBlockString({
  children,
  className: blockClassName = "",
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp,
}) {
  const {
    prism: { defaultLanguage, magicComments },
  } = useThemeConfig();

  const language =
    languageProp ?? parseLanguage(blockClassName) ?? defaultLanguage;

  // We still parse the metastring in case we want to support more syntax in the
  // future. Note that MDX doesn't strip quotes when parsing metastring:
  // "title=\"xyz\"" => title: "\"xyz\""
  return <Prism language={language}>{children}</Prism>;
}
