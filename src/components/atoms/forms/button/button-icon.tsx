import * as React from "react";

import { MarginVariants, margin } from "../../../../cva-utils";

export type ButtonIconProps = MarginVariants & {
  children?: React.ReactNode;
};

export function ButtonIcon(props: ButtonIconProps) {
  const { children, m, mt, mr, mb, ml, ...delegated } = props;

  const componentChildren = React.isValidElement(children)
    ? React.cloneElement(children as any, {
        "aria-hidden": true,
        focusable: false,
      })
    : children;

  return (
    <span className={margin({ m, mt, mr, mb, ml })} {...delegated}>
      {componentChildren}
    </span>
  );
}
