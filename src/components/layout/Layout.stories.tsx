import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';

const metadata: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen', // Ensures 100vh/100vw behavior
  },
  argTypes: {
    header: { control: false },
    sidebar: { control: false },
  },
};

export default metadata;

type Story = StoryObj<typeof Layout>;

/** Helper for visualization */
const Placeholder = ({ label, color }: { label: string; color: string }) => (
  <div
    style={{
      backgroundColor: color,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
    }}
  >
    {label}
  </div>
);

/* ------------------------------------
 * DEFAULT (FULL LAYOUT)
 * ------------------------------------ */
export const Default: Story = {
  args: {
    header: <Placeholder label="Header (100px)" color="#2c3e50" />,
    sidebar: <Placeholder label="Sidebar (300px)" color="#34495e" />,
    children: <Placeholder label="Main Content" color="#ecf0f1" />,
  },
};

/* ------------------------------------
 * NO SIDEBAR
 * ------------------------------------ */
export const NoSidebar: Story = {
  args: {
    header: <Placeholder label="Header" color="#2c3e50" />,
    children: <Placeholder label="Main Content (Full Width)" color="#ecf0f1" />,
  },
};

/* ------------------------------------
 * ONLY CONTENT
 * ------------------------------------ */
export const OnlyContent: Story = {
  args: {
    children: (
      <Placeholder label="Main Content (Full Screen)" color="#ecf0f1" />
    ),
  },
};


