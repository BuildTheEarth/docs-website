import Heading from "@theme/Heading";
import React from "react";
import { Title } from "@mantine/core";
export default function MDXHeading(props) {
  return (
    <Title order={headingToNumber(props.as)} id={props.id}>
      {props.children}
    </Title>
  );
}

function headingToNumber(h: string) {
  switch (h) {
    case "h1":
      return 1;
    case "h2":
      return 2;
    case "h3":
      return 3;
    case "h4":
      return 4;
    case "h5":
      return 5;
    case "h6":
      return 6;
    default:
      1;
  }
}
