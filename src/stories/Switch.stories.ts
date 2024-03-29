import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: {
      control: 'text',
      description: 'label to show',
    },
    color: {
      options: ['default','primary', 'secondary', 'warning'],
      control: { type: 'radio' },
      description: 'Color',
    },
    iconsize: {
      options: ['small','medium', 'large'],
      control: { type: 'radio' },
      description: 'Icon size',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Switch theme',
    color: 'default'
  },
};

