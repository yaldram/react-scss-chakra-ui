import React from "react";
import { cva, cx, VariantProps } from "class-variance-authority";

import { margin, MarginVariants, ColorScheme } from "../../../../cva-utils";
import { ButtonSpinner } from "./button-spinner";
import { ButtonIcon } from "./button-icon";

import "./button.scss";

type ButtonContentProps = Pick<
  ButtonProps,
  "leftIcon" | "rightIcon" | "children" | "iconSpacing"
>;

function ButtonContent(props: ButtonContentProps) {
  const { leftIcon, rightIcon, children, iconSpacing } = props;
  return (
    <React.Fragment>
      {leftIcon && <ButtonIcon mr={iconSpacing}>{leftIcon}</ButtonIcon>}
      {children}
      {rightIcon && <ButtonIcon ml={iconSpacing}>{rightIcon}</ButtonIcon>}
    </React.Fragment>
  );
}

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

    isLoading?: boolean;
    isDisabled?: boolean;

    loadingText?: string;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    iconSpacing?: MarginVariants["m"];

    spinner?: React.ReactElement;
    spinnerPlacement?: "start" | "end";
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
      size,
      isFullWidth,
      colorScheme = "teal",
      className,
      isDisabled = false,
      isLoading = false,
      loadingText,
      spinnerPlacement = "start",
      spinner,
      rightIcon,
      leftIcon,
      iconSpacing = "xxs",
      children,
      ...delegated
    } = props;

    const buttonClasses = cx(
      margin({ m, mt, mr, mb, ml }),
      button({
        variant,
        size,
        isFullWidth,
        className: [colorScheme, className].join(" "),
      })
    );

    const buttonContentProps = {
      rightIcon,
      leftIcon,
      iconSpacing,
      children,
    };

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={isDisabled || isLoading}
        {...delegated}
      >
        {isLoading && spinnerPlacement == "start" && (
          <ButtonSpinner labelText={loadingText} placement="start">
            {spinner}
          </ButtonSpinner>
        )}

        {isLoading ? (
          loadingText || (
            <span style={{ opacity: 0 }}>
              <ButtonContent {...buttonContentProps} />
            </span>
          )
        ) : (
          <ButtonContent {...buttonContentProps} />
        )}

        {isLoading && spinnerPlacement === "end" && (
          <ButtonSpinner labelText={loadingText} placement="end">
            {spinner}
          </ButtonSpinner>
        )}
      </button>
    );
  }
);
