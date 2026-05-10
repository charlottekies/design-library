import styled from "@emotion/styled";
import { color } from "../tokens/semantic-color";

/**
 * HELPER COMPONENTS
 */
export const Swatch = ({ token, bg, description }: { token: string; bg: string; description: string }) => (
  <SwatchContainer>
    <ColorBox style={{ background: bg }} />
    <SwatchMeta>
      <code>{token}</code>
      <span>{description}</span>
    </SwatchMeta>
  </SwatchContainer>
);

export const InteractiveDemo = ({ label, bg }: { label: string; bg: string }) => (
  <DemoBox style={{ background: bg }}>
    {label}
  </DemoBox>
);


/* Styled Components */

const SwatchContainer = styled.div`
  border: 1px solid ${color.border.primary};
  border-radius: 12px;
  overflow: hidden;
  background: white;
`;

const ColorBox = styled.div`
  height: 80px;
  width: 100%;
`;

const SwatchMeta = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  code { font-weight: 700; font-size: 0.85rem; color: ${color.primary.default}; }
  span { font-size: 0.8rem; opacity: 0.7; }
`;


const DemoBox = styled.div`
  padding: 10px 20px;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
`;
