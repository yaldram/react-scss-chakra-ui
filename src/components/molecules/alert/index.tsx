import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { Box, BoxProps, Flex, FlexProps } from "../../atoms/layouts";
import { InfoIcon, WarningIcon, CheckIcon } from "../../atoms/icons";
import { ColorScheme } from "../../../cva-utils";
import { createContext } from "../../../utils";

import "./alert.scss";

const STATUSES = {
  info: { icon: InfoIcon, colorScheme: "blue" },
  warning: { icon: WarningIcon, colorScheme: "orange" },
  success: { icon: CheckIcon, colorScheme: "green" },
  error: { icon: WarningIcon, colorScheme: "red" },
};

export type AlertStatus = keyof typeof STATUSES;

const alert = cva(["alert"], {
  variants: {
    variant: {
      subtle: "subtle",
      "left-accent": "left-accent",
      "top-accent": "top-accent",
      solid: "solid",
    },
  },
  defaultVariants: {
    variant: "subtle",
  },
});

type AlertVariant = VariantProps<typeof alert>["variant"];

interface AlertContext {
  status: AlertStatus;
  variant: AlertVariant;
  colorScheme: ColorScheme;
}

const [AlertProvider, useAlertContext] = createContext<AlertContext>({
  name: "AlertContext",
  errorMessage:
    "useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`",
});

interface AlertOptions {
  status?: AlertStatus;
}

export interface AlertProps
  extends Omit<FlexProps, "bg" | "backgroundColor">,
    AlertOptions {
  colorScheme?: ColorScheme;
  variant?: AlertVariant;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (props, ref) => {
    const { status = "info", variant, align = "center", ...delegated } = props;

    const colorScheme =
      delegated.colorScheme ?? (STATUSES[status].colorScheme as ColorScheme);

    const alertClasses = alert({
      variant,
      className: colorScheme,
    });

    return (
      <AlertProvider value={{ status, variant, colorScheme }}>
        <Flex
          ref={ref}
          role="alert"
          align="center"
          className={alertClasses}
          {...delegated}
        />
      </AlertProvider>
    );
  }
);

export interface AlertTitleProps extends BoxProps {}

const alertTitle = cva(["alert-title"]);

export function AlertTitle(props: AlertTitleProps) {
  const { children, className, ...delegated } = props;

  return (
    <Box className={alertTitle({ className })} {...delegated}>
      {children}
    </Box>
  );
}

export interface AlertDescriptionProps extends BoxProps {}

const alertDescription = cva(["alert-description"]);

export function AlertDescription({
  className,
  ...delegated
}: AlertDescriptionProps) {
  return <Box className={alertDescription({ className })} {...delegated} />;
}

export interface AlertIconProps extends BoxProps {}

const alertIcon = cva(["alert-icon"], {
  variants: {
    variant: {
      subtle: "subtle",
      "left-accent": "left-accent",
      "top-accent": "top-accent",
      solid: "solid",
    },
  },
  defaultVariants: {
    variant: "subtle",
  },
});

export function AlertIcon(props: AlertIconProps) {
  const { status, variant, colorScheme } = useAlertContext();
  const { colorScheme: statusColorScheme, icon: BaseIcon } = STATUSES[status];

  const iconColorScheme = colorScheme ?? statusColorScheme;

  const alertIconClasses = alertIcon({
    variant,
    className: iconColorScheme,
  });

  return (
    <span className={alertIconClasses} {...props}>
      <BaseIcon />
    </span>
  );
}
