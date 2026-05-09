import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';
import { color } from '../../tokens/semantic-color';

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
const Placeholder = ({ label, backgroundColor, fontColor }: { label: string; backgroundColor: string, fontColor: string }) => (
  <div
    style={{
      backgroundColor: backgroundColor,
      height: '100%',
      display: 'flex',
      alignItems: 'top',
      justifyContent: 'top',
      color: fontColor,
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
    header: <Placeholder label="Header" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
    sidebar: <Placeholder label="Sidebar" backgroundColor={color.surface.default} fontColor={color.text.primary.default}/>,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default}/>,
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
    header: <Placeholder label="Header" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
    sidebar: <Placeholder label="Sidebar" backgroundColor={color.surface.default} fontColor={color.text.primary.default}/>,
    rail: <Placeholder label="Rail" backgroundColor={color.surface.default} fontColor={color.text.primary.default}/>,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default}/>,
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
    sidebar: <Placeholder label="Sidebar" backgroundColor={color.surface.default} fontColor={color.text.primary.default}/>,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default}/>,
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
    header: <Placeholder label="Header" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default}/>,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const NoSidebarWithRail: Story = {
  args: {
    header: <Placeholder label="Header" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
    rail: <Placeholder label="Rail" backgroundColor={color.surface.default} fontColor={color.text.primary.default}/>,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default}/>,
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
    header: <Placeholder label="Header" backgroundColor={color.surface.default} fontColor={color.text.primary.default} />,
    sidebar: <Placeholder label="Sidebar" backgroundColor={color.surface.default} fontColor={color.text.primary.default}/>,
    icons: {
      menu: (
        <span style={{ fontSize: 20 }}>
          🍔
        </span>
      ),
    },
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default}/>,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};