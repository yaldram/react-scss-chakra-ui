import React from "react";
import { StoryObj } from "@storybook/react";

import { Alert, AlertIcon, AlertDescription, AlertTitle, AlertProps } from ".";
import { Flex } from "../../atoms/layouts";
import { colorSchemes } from "../../../cva-utils";

export default {
  title: "Molecules/Alert",
};

export const Playground: StoryObj<AlertProps> = {
  args: {
    colorScheme: "gray",
    variant: "solid",
  },
  argTypes: {
    colorScheme: {
      name: "colorScheme",
      type: { name: "string", required: false },
      options: colorSchemes,
      description: "The Color Scheme for the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "gray" },
      },
      control: {
        type: "select",
      },
    },
    variant: {
      name: "variant",
      type: { name: "string", required: false },
      options: ["solid", "subtle", "left-accent", "top-accent"],
      description: "The variant of the alert",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "solid" },
      },
      control: {
        type: "select",
      },
    },
  },
  render: (args: AlertProps) => (
    <Alert {...args}>
      <AlertIcon />
      There was an error processing your request
    </Alert>
  ),
};

export const AlertStatus: StoryObj<AlertProps> = {
  args: {
    status: "info",
    variant: "subtle",
  },
  argTypes: {
    status: {
      name: "status",
      type: { name: "string", required: false },
      options: ["info", "warning", "success", "error"],
      description: "The status of the alert",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "status" },
      },
      control: {
        type: "select",
      },
    },
    variant: {
      name: "variant",
      type: { name: "string", required: false },
      options: ["solid", "subtle", "left-accent", "top-accent"],
      description: "The variant of the alert",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "solid" },
      },
      control: {
        type: "select",
      },
    },
  },
  render: (args: AlertProps) => (
    <Alert {...args}>
      <AlertIcon />
      <Flex direction="col">
        <AlertTitle>Your browser is outdated!</AlertTitle>
        <AlertDescription>
          Your Chakra experience may be degraded.
        </AlertDescription>
      </Flex>
    </Alert>
  ),
};
