import * as React from "react";

import { Icon, IconProps } from "./icon";

interface CreateIconOptions {
  viewBox?: string;
  path?: React.ReactElement | React.ReactElement[];
  d?: string;
  defaultProps?: IconProps;
}

export function createIcon(options: CreateIconOptions) {
  const {
    viewBox = "0 0 24 24",
    d: pathDefinition,
    path,
    defaultProps = {},
  } = options;

  const Component = (props: IconProps) => (
    <Icon viewBox={viewBox} {...defaultProps} {...props}>
      {path ?? <path fill="currentColor" d={pathDefinition} />}
    </Icon>
  );

  return Component;
}
