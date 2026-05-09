import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';

const metadata: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  argTypes: {
    header: { control: false },
    sidebar: { control: false },
    icons: { control: false },
  },
};

export default metadata;

type Story = StoryObj<typeof Layout>;

/* ------------------------------------
 * Placeholder
 * ------------------------------------ */
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
 * DEFAULT 
 * ------------------------------------ */
export const Default: Story = {
  args: {
    header: <Placeholder label="Header" color="#2c3e50" />,
    sidebar: <Placeholder label="Sidebar" color="#34495e" />,
    children: <Placeholder label="Main Content" color="#ecf0f1" />,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

/* ------------------------------------
 * DEFAULT 
 * ------------------------------------ */
export const WithRail: Story = {
  args: {
    header: <Placeholder label="Header" color="#2c3e50" />,
    sidebar: <Placeholder label="Sidebar" color="#34495e" />,
    rail: <Placeholder label="Rail" color ="#34495e" />,
    children: <Placeholder label="Main Content" color="#ecf0f1" />,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

/* ------------------------------------
 * WITHOUT HEADER (IMPORTANT EDGE CASE)
 * ------------------------------------ */
export const NoHeader: Story = {
  args: {
    sidebar: <Placeholder label="Sidebar Drawer" color="#34495e" />,
    children: (
      <Placeholder label="Main Content (No Header)" color="#ecf0f1" />
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

/* ------------------------------------
 * WITHOUT HEADER (IMPORTANT EDGE CASE)
 * ------------------------------------ */
export const NoSidebar: Story = {
  args: {
    header: <Placeholder label="Header" color="#2c3e50" />,
    children: (
      <Placeholder label="Main Content (No Header)" color="#ecf0f1" />
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const NoSidebarWithRail: Story = {
  args: {
    header: <Placeholder label="Header" color="#2c3e50" />,
    rail: <Placeholder label="Rail" color ="#34495e" />,
    children: (
      <Placeholder label="Main Content (No Header)" color="#ecf0f1" />
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

/* ------------------------------------
 * CUSTOM ICON OVERRIDE
 * ------------------------------------ */
export const CustomMenuIcon: Story = {
  args: {
    header: <Placeholder label="Header" color="#2c3e50" />,
    sidebar: <Placeholder label="Sidebar Drawer" color="#34495e" />,
    icons: {
      menu: (
        <span style={{ fontSize: 20 }}>
          🍔
        </span>
      ),
    },
    children: <Placeholder label="Main Content" color="#ecf0f1" />,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};