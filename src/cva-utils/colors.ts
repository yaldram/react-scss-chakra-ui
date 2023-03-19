import { cva, VariantProps } from "class-variance-authority";

// all color schemes
export const colorSchemes = [
  "whiteAlpha",
  "blackAlpha",
  "gray",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "cyan",
  "purple",
  "pink",
  "linkedin",
  "facebook",
  "messenger",
  "whatsapp",
  "twitter",
  "telegram",
] as const;

export type ColorScheme = (typeof colorSchemes)[number];

const colorPalette = [
  "white",
  "black",

  "whiteAlpha50",
  "whiteAlpha100",
  "whiteAlpha200",
  "whiteAlpha300",
  "whiteAlpha400",
  "whiteAlpha500",
  "whiteAlpha600",
  "whiteAlpha700",
  "whiteAlpha800",
  "whiteAlpha900",

  "blackAlpha50",
  "blackAlpha100",
  "blackAlpha200",
  "blackAlpha300",
  "blackAlpha400",
  "blackAlpha500",
  "blackAlpha600",
  "blackAlpha700",
  "blackAlpha800",
  "blackAlpha900",

  "gray50",
  "gray100",
  "gray200",
  "gray300",
  "gray400",
  "gray500",
  "gray600",
  "gray700",
  "gray800",
  "gray900",

  "red50",
  "red100",
  "red200",
  "red300",
  "red400",
  "red500",
  "red600",
  "red700",
  "red800",
  "red900",

  "orange50",
  "orange100",
  "orange200",
  "orange300",
  "orange400",
  "orange500",
  "orange600",
  "orange700",
  "orange800",
  "orange900",

  "yellow50",
  "yellow100",
  "yellow200",
  "yellow300",
  "yellow400",
  "yellow500",
  "yellow600",
  "yellow700",
  "yellow800",
  "yellow900",

  "green50",
  "green100",
  "green200",
  "green300",
  "green400",
  "green500",
  "green600",
  "green700",
  "green800",
  "green900",

  "teal50",
  "teal100",
  "teal200",
  "teal300",
  "teal400",
  "teal500",
  "teal600",
  "teal700",
  "teal800",
  "teal900",

  "blue50",
  "blue100",
  "blue200",
  "blue300",
  "blue400",
  "blue500",
  "blue600",
  "blue700",
  "blue800",
  "blue900",

  "cyan50",
  "cyan100",
  "cyan200",
  "cyan300",
  "cyan400",
  "cyan500",
  "cyan600",
  "cyan700",
  "cyan800",
  "cyan900",

  "purple50",
  "purple100",
  "purple200",
  "purple300",
  "purple400",
  "purple500",
  "purple600",
  "purple700",
  "purple800",
  "purple900",

  "pink50",
  "pink100",
  "pink200",
  "pink300",
  "pink400",
  "pink500",
  "pink600",
  "pink700",
  "pink800",
  "pink900",

  "linkedin50",
  "linkedin100",
  "linkedin200",
  "linkedin300",
  "linkedin400",
  "linkedin500",
  "linkedin600",
  "linkedin700",
  "linkedin800",
  "linkedin900",

  "facebook50",
  "facebook100",
  "facebook200",
  "facebook300",
  "facebook400",
  "facebook500",
  "facebook600",
  "facebook700",
  "facebook800",
  "facebook900",

  "messenger50",
  "messenger100",
  "messenger200",
  "messenger300",
  "messenger400",
  "messenger500",
  "messenger600",
  "messenger700",
  "messenger800",
  "messenger900",

  "whatsapp50",
  "whatsapp100",
  "whatsapp200",
  "whatsapp300",
  "whatsapp400",
  "whatsapp500",
  "whatsapp600",
  "whatsapp700",
  "whatsapp800",
  "whatsapp900",

  "twitter50",
  "twitter100",
  "twitter200",
  "twitter300",
  "twitter400",
  "twitter500",
  "twitter600",
  "twitter700",
  "twitter800",
  "twitter900",

  "telegram50",
  "telegram100",
  "telegram200",
  "telegram300",
  "telegram400",
  "telegram500",
  "telegram600",
  "telegram700",
  "telegram800",
  "telegram900",
] as const;

type ColorMap = Record<(typeof colorPalette)[number], string>;

/**
 * generate cva variants for colors
 * @classPrefix property eg. color, bg, etc
 * @returns a map of color variants
 * eg - { red500: color-red500 } or
 *  { red500: bg-red500 }
 */
function generateColorMap(classPrefix: string) {
  return colorPalette.reduce(
    (accumulator, color) => ({
      ...accumulator,
      [color]: `${classPrefix}-${color}`,
    }),
    {} as ColorMap
  );
}

export const colors = cva([], {
  variants: {
    color: generateColorMap("color"),
  },
});

export type ColorVariants = VariantProps<typeof colors>;

export const bgColors = cva([], {
  variants: {
    bg: generateColorMap("bg"),
  },
});

export type BgColorVariants = VariantProps<typeof bgColors>;
