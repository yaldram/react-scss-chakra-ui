import React from "react";
import { cva, cx, VariantProps } from "class-variance-authority";

import { margin, MarginVariants, ColorScheme } from "../../../../cva-utils";

import "./button.scss";

const button = cva(["button"], {
  variants: {
    variant: {
      link: "link",
      outline: "outline",
      solid: "solid",
      ghost: "ghost",
      unstyled: "unstyled",
    },
    size: {
      xs: "xs",
      sm: "sm",
      md: "md",
      lg: "lg",
    },
    isFullWidth: {
      true: "isFullWidth",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
    isFullWidth: false,
  },
});

export type ButtonProps = MarginVariants &
  VariantProps<typeof button> &
  React.ComponentPropsWithoutRef<"button"> & {
    colorScheme?: ColorScheme;
  };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      m,
      mt,
      mr,
      mb,
      ml,
      variant,
      children,
      size,
      isFullWidth,
      colorScheme = "green",
      className,
      ...delegated
    } = props;

    const buttonClasses = cx(
      margin({ m, mt, mr, mb, ml }),
      button({
        variant,
        size,
        isFullWidth,
        className: colorScheme,
      })
    );

    return (
      <button ref={ref} className={buttonClasses} {...delegated}>
        {children}
      </button>
    );
  }
);
