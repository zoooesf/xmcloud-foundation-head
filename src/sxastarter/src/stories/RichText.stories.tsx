import type { Meta, StoryObj } from '@storybook/react';

import { Default as RichText } from '../components/RichText';

const meta = {
  title: 'components/RichText',
  component: RichText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RichText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'Rich Text',
      params: {
        RenderingIdentifier: 'RichTextRenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
  },
};
