import * as React from "react";
import { StoryObj } from "@storybook/react";

import { Button, ButtonProps } from ".";
import { colorsList, spacingControls } from "../../../../cva-utils";

const { spacingOptions, spacingLabels } = spacingControls();

export default {
  title: "Atoms/Forms/Button",
};

export const Playground: StoryObj<ButtonProps> = {
  parameters: {
    theme: "split",
  },
  args: {
    variant: "solid",
    colorScheme: "green",
    size: "md",
    isFullWidth: false,
    m: "xxs",
  },
  argTypes: {
    variant: {
      name: "variant",
      type: { name: "string", required: false },
      options: ["link", "outline", "solid", "ghost", "unstyled"],
      description: "Variant for the Badge",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "subtle" },
      },
      control: {
        type: "select",
      },
    },
    colorScheme: {
      name: "colorScheme",
      type: { name: "string", required: false },
      options: colorsList,
      description: "The Color Scheme for the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "green" },
      },
      control: {
        type: "select",
      },
    },
    size: {
      name: "size (s)",
      type: { name: "string", required: false },
      options: ["xs", "sm", "md", "lg"],
      description: "Tag height width and horizontal padding",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
      },
      control: {
        type: "select",
      },
    },
    isFullWidth: {
      name: "isFullWidth",
      type: { name: "boolean", required: false },
      description: "Full width button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
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
  render: (args) => <Button {...args}>Button</Button>,
};
