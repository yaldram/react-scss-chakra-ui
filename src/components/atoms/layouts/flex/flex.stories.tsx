import * as React from "react";
import { StoryObj } from "@storybook/react";

import { Flex, FlexProps, Spacer } from ".";
import { spacingControls } from "../../../../cva-utils";

const { spacingOptions, spacingLabels } = spacingControls();

export default {
  title: "Atoms/Layout/Flex",
};

function Container(props: FlexProps) {
  const { children, ...delegated } = props;
  return (
    <Flex
      style={{
        minHeight: "100px",
        minWidth: "100px",
      }}
      justify="center"
      align="center"
      {...delegated}
    >
      {children}
    </Flex>
  );
}

export const Playground: StoryObj<FlexProps> = {
  args: {
    direction: "row",
    justify: "start",
    align: "stretch",
  },
  argTypes: {
    direction: {
      name: "direction",
      type: { name: "string", required: false },
      description: "Shorthand for flexDirection style prop",
      options: ["row", "row-reverse", "col", "col-reverse"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "row" },
      },
      control: {
        type: "select",
      },
    },
    justify: {
      name: "justify",
      type: { name: "string", required: false },
      options: ["start", "end", "center", "between", "around", "evenly"],
      description: "Shorthand for justifyContent style prop",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "start" },
      },
      control: {
        type: "select",
      },
    },
    align: {
      name: "align",
      type: { name: "string", required: false },
      options: ["start", "end", "center", "baseline", "stretch"],
      description: "Shorthand for alignItems style prop",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "stretch" },
      },
      control: {
        type: "select",
      },
    },
    gap: {
      name: "gap",
      type: { name: "string", required: false },
      options: spacingOptions,
      description: "Shorthand for flexGap style prop",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "select",
        labels: spacingLabels,
      },
    },
  },
  render: (args) => (
    <Flex style={{ width: "100%" }} bg="blue100" color="white" p="md" {...args}>
      <Container bg="green500">Box 1</Container>
      <Container bg="blue500">Box 2</Container>
      <Container bg="orange500">Box 3</Container>
    </Flex>
  ),
};

export const FlexSpacer = {
  args: {
    direction: "row",
  },
  argTypes: {
    direction: {
      name: "direction",
      type: { name: "string", required: false },
      options: ["row", "row-reverse", "col", "col-reverse"],
      description: "Shorthand for flexDirection style prop",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "row" },
      },
      control: {
        type: "select",
      },
    },
  },
  render: (args: FlexProps) => (
    <Flex
      style={{ width: "100%", height: "80vh" }}
      color="white"
      bg="blackAlpha200"
      p="xs"
      {...args}
    >
      <Container p="md" bg="red400">
        Box 1
      </Container>
      <Spacer />
      <Container p="md" bg="green400">
        Box 2
      </Container>
    </Flex>
  ),
};

export const Stack: StoryObj<FlexProps> = {
  args: {
    direction: "row",
    gap: "md",
  },
  argTypes: {
    direction: {
      name: "direction",
      type: { name: "string", required: false },
      description: "Shorthand for flexDirection style prop",
      options: ["row", "row-reverse", "col", "col-reverse"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "row" },
      },
      control: {
        type: "select",
      },
    },
    align: {
      name: "align",
      type: { name: "string", required: false },
      options: ["start", "end", "center", "baseline", "stretch"],
      description: "Shorthand for alignItems style prop",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "stretch" },
      },
      control: {
        type: "select",
      },
    },
    gap: {
      name: "gap",
      type: { name: "string", required: false },
      options: spacingOptions,
      description: "Shorthand for flexGap style prop",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "select",
        labels: spacingLabels,
      },
    },
  },
  render: (args) => (
    <Flex
      style={{ width: "100%", minHeight: "100vh" }}
      color="white"
      bg="blue100"
      p="md"
      {...args}
    >
      <Container p="md" bg="yellow500">
        Box 1
      </Container>
      <Container p="md" bg="red500">
        Box 2
      </Container>
      <Container p="md" bg="teal500">
        Box 3
      </Container>
    </Flex>
  ),
};
