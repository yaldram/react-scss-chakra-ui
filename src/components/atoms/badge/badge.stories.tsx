import * as React from "react";
import { StoryObj } from "@storybook/react";

import { Badge, BadgeProps } from ".";
import { colorsList } from "../../../cva-utils";

export default {
  title: "Atoms/Badge",
};

export const Playground: StoryObj<BadgeProps> = {
  args: {
    variant: "subtle",
    colorScheme: "green",
    size: "md",
  },
  argTypes: {
    variant: {
      name: "variant",
      type: { name: "string", required: false },
      options: ["outline", "solid", "subtle"],
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
      options: ["sm", "md", "lg"],
      description: "Tag height width and horizontal padding",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
      },
      control: {
        type: "select",
      },
    },
  },
  render: (args) => <Badge {...args}>SAMPLE BADGE</Badge>,
};
