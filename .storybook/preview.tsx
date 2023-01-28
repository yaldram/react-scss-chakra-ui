import * as React from "react";

import { Flex, FlexProps } from "../src/components/atoms/layouts";

import "../src/css/main.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

function Container(props: FlexProps) {
  const { style, children, ...delegated } = props;

  return (
    <Flex
      align="start"
      p="md"
      style={{ minHeight: "100vh", ...style }}
      {...delegated}
    >
      {children}
    </Flex>
  );
}

const StoriesWithTheme = (StoryFun, context) => {
  const theme = context.parameters.theme || context.globals.theme;

  if (theme === "split") {
    return (
      <Flex>
        <Container bg="white" style={{ flexBasis: "50%" }} data-theme="light">
          <StoryFun />
        </Container>
        <Container bg="gray800" style={{ flexBasis: "50%" }} data-theme="dark">
          <StoryFun />
        </Container>
      </Flex>
    );
  }

  return (
    <Container bg={theme === "dark" ? "gray800" : "white"} data-theme={theme}>
      <StoryFun />
    </Container>
  );
};

export const globalTypes = {
  theme: {
    name: "Change Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      // The icon for the toolbar item
      icon: "circlehollow",
      // Array of options
      items: [
        { value: "light", icon: "circlehollow", title: "light-view" },
        { value: "dark", icon: "circle", title: "dark-view" },
        { value: "split", icon: "graphline", title: "split-view" },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

/**
 * This decorator is a global decorator will
 * be applied to each and every story
 */
export const decorators = [StoriesWithTheme];
