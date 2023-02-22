import { Badge } from "@mantine/core";
import React from "react";
export default function Tag({ permalink, label, count }) {
  return (
    <Badge component="a" href={permalink}>
      {label}
      {count && <span>{count}</span>}
    </Badge>
  );
}
