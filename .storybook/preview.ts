import type { Preview,ReactRenderer } from "@storybook/react";

import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components';
import {  lightTheme, darkTheme } from '../src/theme';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
       withThemeFromJSXProvider<ReactRenderer>({
         themes: {
           light: lightTheme,
           dark: darkTheme,
         },
         defaultTheme: 'light',
         Provider: ThemeProvider,
       }),
     ],
};

export default preview;
