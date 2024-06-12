import type { Meta, StoryObj } from '@storybook/react';

import { ButtonList } from 'src/components/ButtonList';
import { Primary as SitecoreButtonStory } from './SitecoreButton.stories';

const meta = {
  title: 'components/ButtonList',
  component: ButtonList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonList>;

export default meta;
type StoryType = StoryObj<typeof ButtonList>;

const placeholderChildComponent = [
  {
    uid: 'anything',
    ...SitecoreButtonStory.args?.rendering,
    link: {
      ...SitecoreButtonStory.args?.link,
    },
  },
];

export const Default: StoryType = {
  args: {
    rendering: {
      componentName: 'ButtonList',
      params: {
        RenderingIdentifier: 'ColumnSplitterRenderingIdentifier',
      },
      placeholders: {
        'button-placeholder1-{*}': [...placeholderChildComponent],
        'button-placeholder2-{*}': [...placeholderChildComponent],
      },
    },
    params: {
      styles: '',
      EnabledPlaceholders: 'placeholder1,placeholder2',
    },
  },
};
