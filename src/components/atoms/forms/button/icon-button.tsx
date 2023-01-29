import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { Button, ButtonProps } from "./button";

import "./button.scss";

type Omitted =
  | "leftIcon"
  | "isFullWidth"
  | "rightIcon"
  | "loadingText"
  | "iconSpacing";

const iconButton = cva(["icon-button"], {
  variants: {
    isRound: {
      true: "isRound",
    },
  },
  defaultVariants: {
    isRound: false,
  },
});

export type IconButtonProps = Omit<ButtonProps, Omitted> &
  VariantProps<typeof iconButton> & {
    icon: React.ReactElement;
    "aria-label": string;
  };

export function IconButton(props: IconButtonProps) {
  const {
    icon,
    children,
    isRound,
    "aria-label": ariaLabel,
    ...delegated
  } = props;

  const element = icon || children;

  const buttonChildren = React.isValidElement(element)
    ? React.cloneElement(element as any, {
        "aria-hidden": true,
        focusable: false,
      })
    : null;

  return (
    <Button
      aria-label={ariaLabel}
      className={iconButton({ isRound })}
      {...delegated}
    >
      {buttonChildren}
    </Button>
  );
}
