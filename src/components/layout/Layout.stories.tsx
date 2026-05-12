import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';
import { color } from '../../tokens/semantic-color';
import { Sidebar } from './Sidebar';
import React from 'react';
import { Rail } from './Rail';
import { Header } from './Header';

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
  },
};

export default metadata;

type Story = StoryObj<typeof Layout>;

const Placeholder = ({ label, backgroundColor, fontColor }: { label: string; backgroundColor: string; fontColor: string }) => (
  <div style={{ backgroundColor, height: '100%', display: 'flex', alignItems: 'top', justifyContent: 'top', color: fontColor, fontWeight: 'bold' }}>{label}</div>
);

interface NavItemProps { icon: React.ReactNode; label: string; isActive?: boolean; }

const NavItem = ({ icon, label, isActive }: NavItemProps) => (
  <div className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors cursor-pointer ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'}`}>
    <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
    <span className="font-medium text-sm">{label}</span>
  </div>
);

const SidebarContent = () => (
  <>
    <NavItem label="Dashboard" isActive icon={<svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20px" height="20px"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>} />
    <NavItem label="Settings" icon={<svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20px" height="20px"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.246.47c.33.123.7.085 1.006-.13a6.47 6.47 0 0 1 .222-.127c.333-.185.596-.508.668-.897l.213-1.281Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>} />
  </>
);

const RailComponent = () => (<Rail><NavItem label="" isActive icon={<svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20px" height="20px"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>} /><NavItem label="" icon={<svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20px" height="20px"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.246.47c.33.123.7.085 1.006-.13a6.47 6.47 0 0 1 .222-.127c.333-.185.596-.508.668-.897l.213-1.281Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>} /></Rail>);

const MySidebar = () => (<Sidebar><SidebarContent /></Sidebar>);

/* ------------------------------------
 * DEFAULT
 * ------------------------------------ */
export const Default: Story = {
  args: {
    header: <Header>Header</Header>,
    sidebar: <MySidebar />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />,
  },
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

/* ------------------------------------
 * WITH RAIL
 * ------------------------------------ */
export const WithRail: Story = {
  args: {
    header: <Header>Header</Header>,
    sidebar: <MySidebar />,
    rail: <RailComponent />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />,
  },
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

/* ------------------------------------
 * NO HEADER
 * ------------------------------------ */
export const NoHeader: Story = {
  args: {
    sidebar: <MySidebar />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />,
  },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};

/* ------------------------------------
 * NO SIDEBAR
 * ------------------------------------ */
export const NoSidebar: Story = {
  args: {
    header: <Header>Header</Header>,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />,
  },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};

/* ------------------------------------
 * NO SIDEBAR WITH RAIL
 * ------------------------------------ */
export const NoSidebarWithRail: Story = {
  args: {
    header: <Header>Header</Header>,
    rail: <RailComponent />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />,
  },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};

/* ------------------------------------
 * CUSTOM ICON
 * ------------------------------------ */
export const CustomMenuIcon: Story = {
  args: {
    header: <Header menuIcon={<span style={{ fontSize: 20 }}>🍔</span>}>Header</Header>,
    sidebar: <MySidebar />,
    children: <Placeholder label="Main Content" backgroundColor={color.surface.secondary} fontColor={color.text.primary.default} />,
  },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};