import CFooter from "@site/src/components/Footer";
import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
function Footer() {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright, links, logo, style } = footer;
  return <CFooter links={[]} />;
}
export default React.memo(Footer);
