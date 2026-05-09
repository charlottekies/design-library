import type { Preview } from '@storybook/react-vite'
import React from 'react'; // Make sure React is imported to use JSX
import { GlobalStyles } from '../src/styles/globalStyles'; 

const preview: Preview = {
  // 👇 Add the decorators array here
decorators: [
    (Story: any) => (
      <React.Fragment>
        <GlobalStyles />
        <Story />
      </React.Fragment>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo'
    }
  },
};

export default preview;