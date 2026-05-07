import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen', // Ensures the 100vh/100vw fills the preview frame
  },
  // Default decorators to give placeholders some color
  argTypes: {
    header: { control: false },
    sidebar: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

// Helper for visualization
const Placeholder = ({ label, color }: { label: string; color: string }) => (
  <div style={{ 
    backgroundColor: color, 
    height: '100%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold' 
  }}>
    {label}
  </div>
);

// TODO: Use Design Tokens
export const Default: Story = {
  args: {
    header: <Placeholder label="Header (100px)" color="#2c3e50" />,
    sidebar: <Placeholder label="Sidebar (300px)" color="#34495e" />,
    children: <Placeholder label="Main Content" color="#ecf0f1" />,
  },
};

// TODO: Use Design Tokens
export const NoSidebar: Story = {
  args: {
    header: <Placeholder label="Header" color="#2c3e50" />,
    children: <Placeholder label="Main Content (Full Width)" color="#ecf0f1" />,
  },
};

export const OnlyContent: Story = {
  args: {
    children: <Placeholder label="Main Content (Full Screen)" color="#ecf0f1" />,
  },
};