import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

import "./spinner.scss";

const spinner = cva(["spinner"], {
  variants: {
    size: {
      xs: "xs",
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
    },
  },
});

export type SpinnerProps = VariantProps<typeof spinner> &
  React.ComponentProps<"span"> & {
    thickness?: string;
    speed?: string;
    color?: string;
  };

export function Spinner(props: SpinnerProps) {
  const { thickness, speed, size, style, className, ...delegated } = props;

  const stylesWithVars = {
    "--thickness": thickness,
    "--speed": speed,
    ...style,
  } as React.CSSProperties;

  return (
    <span
      style={stylesWithVars}
      className={spinner({ size, className })}
      {...delegated}
    />
  );
}
