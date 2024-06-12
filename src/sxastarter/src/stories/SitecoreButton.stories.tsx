import type { Meta, StoryObj } from '@storybook/react';
import { SitecoreButton } from '../components/SitecoreButton';
import './sitecoreButton.css';
const meta = {
  title: 'Components/Button',
  component: SitecoreButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof SitecoreButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'SitecoreButton',
      dataSource: 'truthyValue',
      params: {
        RenderingIdentifier: 'SitecoreButtonRenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
    fields: {
      backgroundColor: 'blue',
      size: 'medium',
      link: {
        value: {
          href: 'https://www.google.ca',
          title: 'CLICK',
          target: '_blank',
          text: 'Normal Button',
          querystring: '',
          linktype: 'external',
        },
      },
      disableState: false,
    },
  },
};

// export const Secondary: Story = {
//   args: {
//     backgroundColor: 'green',
//     size: 'medium',
//     link: {
//       value: {
//         href: 'https://www.google.ca',
//         title: 'DO NOT CLICK',
//         target: '_blank',
//         text: 'Diabled Button',
//         querystring: '',
//         linktype: 'external',
//       },
//     },
//     disableState: true,
//   },
// };

// export const Large: Story = {
//   args: {
//     backgroundColor: 'yellow',
//     size: 'large',
//     link: {
//       value: {
//         href: 'https://www.google.ca',
//         title: 'Google',
//         target: '_blank',
//         text: 'Really Big Button',
//         querystring: '',
//         linktype: 'external',
//       },
//     },
//     disableState: true,
//   },
// };

// export const Small: Story = {
//   args: {
//     backgroundColor: 'blue',
//     size: 'small',
//     link: {
//       value: {
//         href: 'https://www.google.ca',
//         title: '',
//         target: '_blank',
//         text: 'Teeny Tiny Button',
//         querystring: '',
//         linktype: 'external',
//       },
//     },
//     disableState: false,
//   },
// };
