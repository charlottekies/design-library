import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
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

/* ------------------------------------
 * DESKTOP COLLAPSED RAIL (100px)
 * forces your @media (max-width: 1200px)
 * ------------------------------------ */
export const DesktopCollapsed: Story = {
  render: (args) => (
    <div style={{ width: '1100px', height: '100vh' }}>
      <Layout
        {...args}
        header={<Placeholder label="Header" color="#2c3e50" />}
        sidebar={<Placeholder label="Collapsed Rail" color="#34495e" />}
      >
        <Placeholder label="Main Content" color="#ecf0f1" />
      </Layout>
    </div>
  ),
};

/* ------------------------------------
 * MOBILE DRAWER (HAMBURGER + OVERLAY)
 * ------------------------------------ */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },

  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <Layout
          {...args}
          header={
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: 12,
              }}
            >
              <button
                onClick={() => setOpen(v => !v)}
                style={{
                  fontSize: 18,
                  marginRight: 12,
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                ☰
              </button>
              Header
            </div>
          }
          sidebar={
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: 280,
                height: '100%',
                backgroundColor: '#34495e',
                color: 'white',
                padding: 16,
                transform: open ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 0.2s ease',
                zIndex: 1000,
              }}
            >
              Mobile Sidebar
            </div>
          }
        >
          <Placeholder label="Main Content" color="#ecf0f1" />
        </Layout>
      </div>
    );
  },
};