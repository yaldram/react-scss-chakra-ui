import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { ColorScheme } from "../../../cva-utils";
import { Box, BoxProps } from "../layouts";

import "./badge.scss";

const badge = cva(["badge"], {
  variants: {
    variant: {
      outline: "outline",
      solid: "solid",
      subtle: "subtle",
    },
    size: {
      sm: "sm",
      md: "md",
      lg: "lg",
    },
  },
  defaultVariants: {
    variant: "subtle",
    size: "md",
  },
});

export type BadgeProps = VariantProps<typeof badge> &
  BoxProps & {
    colorScheme?: ColorScheme;
  };

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (props, ref) => {
    const {
      variant,
      size,
      colorScheme = "green",
      children,
      className,
      ...delegated
    } = props;

    const badgeClasses = badge({
      variant,
      size,
      className: [colorScheme, className].join(" "),
    });

    return (
      <Box ref={ref} className={badgeClasses} {...delegated}>
        {children}
      </Box>
    );
  }
);
