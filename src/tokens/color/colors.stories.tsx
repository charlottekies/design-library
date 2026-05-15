import type { Meta, StoryObj } from '@storybook/react';
import styled from '@emotion/styled';
import { color } from './semantic'
import { InteractiveDemo, Swatch } from '../../stories/components';


const metadata: Meta = {
    title: 'Tokens/Colors',
};

export default metadata;

type Story = StoryObj;


export const Colors: Story = {
    render: () => (
        <Page>
            <header>
                <Badge>Documentation</Badge>
                <Title>Color Tokens</Title>
            </header>

              {/* COLOR SYSTEM HEADER */}
                <header>
                    <CategoryHeader>
                    <div className="label">Tokens</div>
                    <h1>1. Color Tokens</h1>
                    <p>
                        The following tokens are here to help you define a color palette across text, UI elements, and surfaces across your application
                    </p>
                    <p>
                        A default color palette has been created in this library for you, but if you want to style and define your own brand,
                        you can override the variable values associated with each token in a global css file in your application. 
                    </p>
                    </CategoryHeader>
                </header>

            {/* SURFACES */}
            <Section>
                <SectionHeader>
                    <h2>Surface Colors</h2>
                    <p>Define UI layering and background structure.</p>
                </SectionHeader>
                <Grid>
                    <Swatch
                        token="surface.default"
                        bg={color.surface.default}
                        description="Main application background"
                    />
                    <Swatch
                        token="surface.secondary"
                        bg={color.surface.secondary}
                        description="Cards, panels, and sidebars"
                    />
                </Grid>
            </Section>

            {/* TEXT */}
            <Section>
                <SectionHeader>
                    <h2>Text Colors</h2>
                    <p>Standardized colors for readability and hierarchy.</p>
                </SectionHeader>
                <Card>
                    <TextRow color={color.text.primary.default}>
                        <div><strong>Primary Text</strong> — Used for body content and headings.</div>
                    </TextRow>
                    <TextRow color={color.text.primary.default} opacity={0.6}>
                        <div><strong>Secondary Emphasis</strong> — Used for captions and supporting text.</div>
                    </TextRow>
                    <TextRow bg={color.primary.default} color={color.text.primary.inverse}>
                        <div><strong>Inverse Text</strong> — High contrast text on primary backgrounds.</div>
                    </TextRow>
                </Card>
            </Section>

            {/* PRIMARY */}
            <Section>
                <SectionHeader>
                    <h2>Primary Action Colors</h2>
                    <p>Interactive states for buttons and clickable elements.</p>
                </SectionHeader>
                <Row>
                    <InteractiveDemo label="Default" bg={color.primary.default} />
                    <InteractiveDemo label="Hover" bg={color.primary.hover} />
                    <InteractiveDemo label="Pressed" bg={color.primary.pressed} />
                    <InteractiveDemo label="Disabled" bg={color.primary.disabled} />
                </Row>
            </Section>

            {/* BORDERS */}
            <Section>
                <SectionHeader>
                    <h2>Border & Outline Colors</h2>
                    <p>Structural elements for containment and selection.</p>
                </SectionHeader>
                <Grid>
                    <BorderCard border={color.border.primary}>border.primary</BorderCard>
                    <BorderCard border={color.border.highlight}>border.highlight</BorderCard>
                </Grid>
            </Section>
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

const CategoryHeader = styled.div`
  .label {
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    color: ${color.primary.default};
    margin-bottom: 4px;
  }
  h1 { 
    font-size: 2rem; 
    margin: 0 0 12px 0; 
  }
  p { 
    max-width: 650px; 
    line-height: 1.6; 
    opacity: 0.8; 
  }
`;


const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SectionHeader = styled.div`
  border-bottom: 1px solid ${color.border.primary};
  padding-bottom: 16px;
  h2 { margin: 0; font-size: 1.5rem; }
  p { margin: 4px 0 0; opacity: 0.6; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;


const Card = styled.div`
  border: 1px solid ${color.border.primary};
  border-radius: 12px;
  overflow: hidden;
`;

const TextRow = styled.div<{ bg?: string; color: string; opacity?: number }>`
  padding: 16px 20px;
  background: ${({ bg }) => bg || 'transparent'};
  color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity || 1};
  border-bottom: 1px solid ${color.border.primary};
  &:last-child { border-bottom: none; }
`;

const Row = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const BorderCard = styled.div<{ border: string }>`
  padding: 24px;
  border: 2px solid ${({ border }) => border};
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  background: ${color.surface.secondary};
`;
