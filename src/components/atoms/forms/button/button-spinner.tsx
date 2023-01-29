import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

import { Spinner } from "../../feedback";

import "./button.scss";

const buttonSpinner = cva(["button-spinner"], {
  variants: {
    placement: {
      start: "start",
      end: "end",
    },
    isAbsolute: {
      true: "isAbsolute",
    },
  },
});

export type ButtonSpinnerProps = VariantProps<typeof buttonSpinner> & {
  children?: React.ReactElement;
  labelText?: string;
};

export function ButtonSpinner(props: ButtonSpinnerProps) {
  const { labelText, placement, children = <Spinner /> } = props;

  return (
    <div
      className={buttonSpinner({
        placement: labelText ? placement : undefined,
        isAbsolute: !labelText,
      })}
    >
      {children}
    </div>
  );
}
