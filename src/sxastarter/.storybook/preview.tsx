import { LayoutServicePageState, SitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import type { Preview } from '@storybook/react';
import '../src/assets/main.scss';
import { componentBuilder } from '../src/temp/componentBuilder';
import React from 'react';


export const mockLayoutData = {
  sitecore: {
    context: {
      pageEditing: false,
      pageState: LayoutServicePageState.Normal,
    },
    setContext: () => {
      // nothing
    },
    route: null,
  },
};


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <SitecoreContext
        componentFactory={componentBuilder.getComponentFactory({ isEditing: mockLayoutData.sitecore.context.pageEditing })}
        layoutData={mockLayoutData}
      >
        <Story />
      </SitecoreContext>
    ),
  ],
};

export default preview;
