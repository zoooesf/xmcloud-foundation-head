import type { Meta, StoryObj } from '@storybook/react';

import Card from '../components/Card';

const meta = {
  title: 'components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'Card',
      dataSource: 'truthyValue',
      params: {
        RenderingIdentifier: 'ContentBlockRenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
    fields: {
      heading: { value: 'Very Important Card' },
      body: { value: 'Very very very important. The most important' },
      category: { value: 'Category 1' },
      categoryColor: 'blue',
    },
  },
};
