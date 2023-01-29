import * as React from "react";

import { StoryObj } from "@storybook/react";

import { Box, BoxProps } from ".";
import { spacingControls } from "../../../../cva-utils";

export default {
  title: "Atoms/Layout/Box",
};

const { spacingOptions, spacingLabels } = spacingControls();

export const Playground: StoryObj<BoxProps> = {
  args: {
    bg: "orange500",
    color: "black",
    p: "sm",
    m: "sm",
  },
  argTypes: {
    bg: {
      name: "bg",
      type: { name: "string", required: false },
      description: "Background Color CSS Prop for the component",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "transparent" },
      },
      control: {
        type: "text",
      },
    },
    color: {
      name: "color",
      type: { name: "string", required: false },
      description: "Color CSS Prop for the component",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "black" },
      },
      control: {
        type: "text",
      },
    },
    p: {
      name: "padding",
      type: { name: "string", required: false },
      options: spacingOptions,
      description: `Padding CSS prop for the Component shorthand for padding.
        We also have pt, pb, pl, pr.`,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "-" },
      },
      control: {
        type: "select",
        labels: spacingLabels,
      },
    },
    m: {
      name: "margin",
      type: { name: "string", required: false },
      options: spacingOptions,
      description: `Margin CSS prop for the Component shorthand for padding.
        We also have mt, mb, ml, mr.`,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "-" },
      },
      control: {
        type: "select",
        labels: spacingLabels,
      },
    },
  },
  render: (args) => (
    <Box style={{ width: "100%" }} {...args}>
      Box Component
    </Box>
  ),
};

export const Default = () => (
  <Box style={{ width: "100%" }} p="lg" color="white" bg="teal700">
    Button
  </Box>
);
