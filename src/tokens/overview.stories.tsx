import type { Meta, StoryObj } from '@storybook/react';
import styled from '@emotion/styled';
import { color } from './color/semantic';

const metadata: Meta = {
  title: 'Tokens/Overview',
};

export default metadata;

type Story = StoryObj;

/**
 * STORY 1: OVERVIEW
 */
export const Overview: Story = {
  render: () => (
    <Page>
      <header>
        <Badge>Documentation</Badge>
        <Title>Design Tokens and How to Use Them</Title>
        <IntroText>
          There are currently three types of design tokens in this library: 
          <strong> Color</strong>, <strong>Spacing</strong>, and <strong>Borders</strong>.
        </IntroText>
      </header>

      <InfoSection>
        <div className="content">
          <h3>Why use tokens?</h3>
          <p>
            Using tokens is a way to keep the style of your application consistent across multiple 
            pages and feature areas. Consistent color tokens, border radiuses, and fonts give 
            your application a unified, professional feel.
          </p>
          <p>
            Most importantly, if you decide to change a theme color—from 
            <InlineSwatch bg={color.primary.pressed} /> <strong>this shade</strong> to 
            <InlineSwatch bg={color.primary.hover} /> <strong>this one</strong>—you 
            only need to make that change in <em>one</em> place!
          </p>
          <p>
            When you update the hex value associated with a reusable token, everywhere 
            across the app that uses it will see the color <strong>magically update</strong>.
          </p>
        </div>
      </InfoSection>
    </Page>
  ),
};

/**
 * STYLED COMPONENTS
 */
const Page = styled.div`
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: ${color.text.primary.default};
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin: 8px 0 16px;
  letter-spacing: -0.02em;
`;

const Badge = styled.span`
  background: ${color.primary.default}20;
  color: ${color.primary.default};
  padding: 4px 12px;
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.8;
  max-width: 700px;
`;

const InfoSection = styled.div`
  background: ${color.surface.secondary};
  border-left: 4px solid ${color.primary.default};
  padding: 24px 32px;
  border-radius: 0 12px 12px 0;
  max-width: 800px;
  .content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    line-height: 1.6;
    font-size: 1.05rem;
  }
`;


const InlineSwatch = styled.span<{ bg: string }>`
  display: inline-block;
  width: 14px;
  height: 14px;
  vertical-align: middle;
  margin: 0 4px;
  border-radius: 3px;
  background: ${({ bg }) => bg};
  border: 1px solid rgba(0,0,0,0.1);
`;

