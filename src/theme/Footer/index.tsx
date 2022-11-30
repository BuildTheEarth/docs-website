import CFooter from "@site/src/components/Footer";
import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
function Footer() {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  var items = [];

  const { copyright, links, logo, style } = footer;
  links.forEach((link) => {
    link.items.forEach((i) => items.push({ label: i.label, link: i.to }));
  });
  console.log(copyright, links, logo, style);
  return <CFooter links={items} />;
}
export default React.memo(Footer);
