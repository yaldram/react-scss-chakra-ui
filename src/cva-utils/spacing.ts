import { cva, VariantProps } from "class-variance-authority";

const spacing = {
  xxs: "0.6rem",
  xs: "0.8rem",
  sm: "1rem",
  md: "1.2rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "2.4rem",
  "3xl": "3rem",
  "4xl": "3.6rem",
};

type SpacingMap = Record<keyof typeof spacing, string>;

/**
 * generate cva variants for paddings, margins
 * @classPrefix property eg. p, pt, m, mt, gap, etc.
 * @returns a map of color variants
 * eg -{ xs: pt-xs } or { lg: gap-lg }
 */
function generateSpacingMap(classPrefix: string) {
  return Object.keys(spacing).reduce(
    (accumulator, token) => ({
      ...accumulator,
      [token]: `${classPrefix}-${token}`, // xs : p-xs
    }),
    {} as SpacingMap
  );
}

/**
 * Will contain all padding variants
 * eg: p: { xxs: p-xxs, xs: p-xs, ... } &
 * pt: { xxs: pt-xxs, xs: pt-xxs, ... }
 */
export const padding = cva([], {
  variants: {
    p: generateSpacingMap("p"),
    pt: generateSpacingMap("pt"),
    pr: generateSpacingMap("pr"),
    pb: generateSpacingMap("pb"),
    pl: generateSpacingMap("pl"),
  },
});

export type PaddingVariants = VariantProps<typeof padding>;

/**
 * Will contain all margin variants
 * eg: m: { xxs: m-xxs, xs: m-xs, ... }
 * mt: { xxs: mt-xxs, xs: mt-xxs, ... }
 */
export const margin = cva([], {
  variants: {
    m: generateSpacingMap("m"),
    mt: generateSpacingMap("mt"),
    mr: generateSpacingMap("mr"),
    mb: generateSpacingMap("mb"),
    ml: generateSpacingMap("ml"),
  },
});

export type MarginVariants = VariantProps<typeof margin>;

/**
 * Will contain all margin variants
 * eg: gap: { xxs: gap-xxs, xs: gap-xs, ... }
 */
export const flexGap = cva([], {
  variants: {
    gap: generateSpacingMap("gap"),
  },
});

export type FlexGapVariants = VariantProps<typeof flexGap>;

/**
 * Used for storybook controls returns -
 * options: ['xxs', 'xs', 'sm', ...]
 * labels: { xxs: xxs (0.6rem), xs: xs (0.8rem), ... }
 */
export function spacingControls() {
  const spacingOptions = Object.keys(spacing);
  const spacingLabels = Object.entries(spacing).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: `${key} (${value})`,
    }),
    {}
  );

  return { spacingOptions, spacingLabels };
}
