import * as React from "react";
import { StoryObj } from "@storybook/react";

import { colorsList, spacingControls } from "../../../../cva-utils";
import { Flex } from "../../layouts";
import { ArrowForwardIcon, EmailIcon } from "../../icons";
import { Button, ButtonProps } from "./button";
import { IconButton } from "./icon-button";

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

export const Default: StoryObj<ButtonProps> = {
  parameters: {
    theme: "split",
  },
  args: {
    colorScheme: "teal",
    size: "md",
  },
  argTypes: {
    colorScheme: {
      name: "colorScheme",
      type: { name: "string", required: false },
      options: colorsList,
      description: "The Color Scheme for the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "teal" },
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
  },
  render: (args) => {
    const { colorScheme, size } = args;

    return (
      <Flex direction="col" gap="lg">
        <Flex gap="lg" align="center">
          <Button colorScheme={colorScheme} size="xs">
            Button
          </Button>
          <Button colorScheme={colorScheme} size="sm">
            Button
          </Button>
          <Button colorScheme={colorScheme} size="md">
            Button
          </Button>
          <Button colorScheme={colorScheme} size="lg">
            Button
          </Button>
        </Flex>
        <Flex gap="lg" align="center">
          <Button size={size} colorScheme={colorScheme} variant="solid">
            Button
          </Button>
          <Button size={size} colorScheme={colorScheme} variant="outline">
            Button
          </Button>
          <Button size={size} colorScheme={colorScheme} variant="ghost">
            Button
          </Button>
          <Button size={size} colorScheme={colorScheme} variant="link">
            Button
          </Button>
        </Flex>
        <Flex gap="lg" align="center">
          <Button
            isLoading
            size={size}
            colorScheme={colorScheme}
            variant="solid"
          >
            Button
          </Button>
          <Button
            isLoading
            size={size}
            loadingText="Loading...."
            colorScheme={colorScheme}
            variant="outline"
            spinnerPlacement="start"
          >
            Button
          </Button>
          <Button
            isLoading
            size={size}
            loadingText="Loading...."
            colorScheme={colorScheme}
            variant="outline"
            spinnerPlacement="end"
          >
            Button
          </Button>
        </Flex>
        <Flex gap="lg" align="center">
          <Button
            size={size}
            leftIcon={<EmailIcon />}
            colorScheme={colorScheme}
            variant="solid"
          >
            Email
          </Button>
          <Button
            size={size}
            rightIcon={<ArrowForwardIcon />}
            colorScheme={colorScheme}
            variant="outline"
          >
            Call us
          </Button>
        </Flex>
        <Flex gap="lg" align="center">
          <IconButton
            icon={<EmailIcon />}
            size={size}
            aria-label="Icon Button"
            colorScheme={colorScheme}
          />
          <IconButton
            icon={<EmailIcon />}
            size={size}
            aria-label="Icon Button"
            variant="outline"
            colorScheme={colorScheme}
          />
          <IconButton
            icon={<EmailIcon />}
            size={size}
            aria-label="Icon Button"
            variant="ghost"
            colorScheme={colorScheme}
          />
          <IconButton
            icon={<EmailIcon />}
            size={size}
            aria-label="Icon Button"
            variant="link"
            colorScheme={colorScheme}
          />
        </Flex>
      </Flex>
    );
  },
};
