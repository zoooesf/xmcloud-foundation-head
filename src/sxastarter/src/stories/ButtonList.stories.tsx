import type { Meta, StoryObj } from '@storybook/react';

import { ButtonList } from 'src/components/ButtonList';
import { Default as SitecoreButtonStory } from './SitecoreButton.stories';

const meta = {
  title: 'components/ButtonList',
  component: ButtonList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonList>;

export default meta;
type StoryType = StoryObj<typeof meta>;

const placeholderChildComponent = {
  uid: 'anything',
  ...SitecoreButtonStory.args.rendering,
  fields: {
    ...SitecoreButtonStory.args.fields,
  },
};
export const Default: StoryType = {
  args: {
    rendering: {
      componentName: 'ButtonList',
      params: {
        RenderingIdentifier: 'ColumnSplitterRenderingIdentifier',
      },
      placeholders: {
        'button-placeholder1-{*}': [placeholderChildComponent],
        'button-placeholder2-{*}': [placeholderChildComponent],
      },
    },
    params: {
      styles: '',
      EnabledPlaceholders: 'placeholder1,placeholder2',
    },
  },
};
