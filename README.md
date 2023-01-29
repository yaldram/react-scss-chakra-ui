# react-scss-chakra-ui

> Chakra UI Elements cloned using scss and class-variance-authority. Please check the deployed storybook [here](http://yaldram-react-scss-chakra-ui.s3-website.ap-south-1.amazonaws.com).

### Introduction

- Chakra UI Components are really awesome the styling and the various options for customizations really fit the needs for most React Applications.
- I previously created a clone of various chakra ui components using css-in-js styled-components and styled-systems [here](https://github.com/yaldram/chakra-ui-clone). This project is an improvement over my previous project, here I have **replaced css in js (runtime styling solutions) with scss (static styles)**.
- The previous project only supported light mode, this project supports both light and dark modes.
- **This project uses scss for styling, class-variance-authority for applying those styles and uses vite as the build tool**.

### Moving away from css in js

- Css in js libraries like styled-components and emotion have a runtime cost. For most applications it won't matter but there are some for which it is costly.
- With the latest tools in the React ecosystem like Remix for example css in js is discouraged, there are some problems with caching the css on edge, etc.

### Why not Tailwind

- **Use the right tool for the right job**. Tailwind is awesome, but I won't use it for building a component library.
- First reason I want control over my styles, I want to only generate those classes, which I need, that depends on my theme my tokens.
- Second I don't want the consumers of my component library to work inside the tailwind.config.js all theme settings should be part of the css / scss.
- Third, its okay to right css, I don't want to write the styles say for my Button component using only classes, it gets really un-maintainable and very hard to read in the long run.
- Fourth scss is very powerful, you can build all these small token classes like `p-xs, pt-xs, etc.` with scss loops, lists and maps. You can use those awesome utility functions for colors like I `rgba(), transparentize(), etc.`.
- The consumer of this library can use the Layout components like Box and Flex, but given that we have created all the utility classes they can use these classes without our components, instead of -

```jsx
<Flex direction="col" gap="xl">
  <Box p="3xl" bg="red500" color="white">
    Box 1
  </Box>
  <Box p="3xl" bg="orange500" color="white">
    Box 2
  </Box>
</Flex>
```

we can do -

```jsx
<div className="flex flex-col gap-xl">
  <div className="p-3xl bg-red500 color-white">Box 1</div>
  <div className="p-3xl bg-orange500 color-white">Box 2</div>
</div>
```

### My Learnings

- `class-variance-authority` is mind-blowing, it makes is very easy to create a component with different variants, it also has great Typescript support.
- The folder structure is organized keeping in mind the `atomic design methodology`.
- Similar to tailwind, I created utility classes for paddings, margins, color, bg, gap, etc. so that it matches the **chakra utility props API**

```jsx
<Box p="lg" m="xl" bg="red500" color="white">
  Box Component
</Box>
```

- The current project supports both light-mode and dark-mode you can switch the themes in the storybook, and even have both the modes side by side when you choose the split mode from `Switch Theme` dropdown.
- In the chakra code base the dark mode colors are generated using `rgba()` function at runtime, given the fact that we are using scss, it already provides us with a lot of utility functions like `rgba()`.
- The biggest takeway is that we don't need css in js if we want to create a good themeable component design system, **scss is very very powerful, its an awesome tool**.

### Improvements

- Chakra ui uses emotion (css-in-js) so it has a flat theme, it has no different theme objects, say a lightTheme and darkTheme. But when we use css we should always have 2 different theme tokens one for dark mode one for light mode.
- So that we don't have to write to different classes for a themeable component one class targeting the light mode other the dark mode. It should be like, when we change the mode the css variables change.

### Usage

- Clone the project.
- Run `yarn install`.
- Run `yarn storybook`.
- To build the project run `yarn build`.

### License

MIT © [github.com/yaldram](https://github.com/github.com/yaldram)
