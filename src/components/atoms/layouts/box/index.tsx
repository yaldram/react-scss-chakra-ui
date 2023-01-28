import * as React from "react";
import { cva, cx } from "class-variance-authority";

import {
  bgColors,
  BgColorVariants,
  colors,
  ColorVariants,
  margin,
  MarginVariants,
  padding,
  PaddingVariants,
} from "../../../../cva-utils";

import "./box.scss";

const box = cva(["box"]);

export type BoxProps = ColorVariants &
  BgColorVariants &
  MarginVariants &
  PaddingVariants &
  React.ComponentPropsWithoutRef<"div">;

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const {
    p,
    pt,
    pr,
    pb,
    pl,
    m,
    mt,
    mr,
    mb,
    ml,
    color,
    bg,
    className,
    children,
    ...delegated
  } = props;

  /**
   * Merge the utility classes
   */
  const boxClasses = cx(
    padding({ p, pt, pr, pb, pl }),
    margin({ m, mt, mr, mb, ml }),
    colors({ color }),
    bgColors({ bg }),
    box({ className })
  );

  return (
    <div className={boxClasses} ref={ref} {...delegated}>
      {children}
    </div>
  );
});
