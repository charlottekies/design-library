import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { ReactNode } from 'react';

import { color } from '../../tokens/color/semantic';
import { typography } from '../../tokens/typography/semantic';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'bodySmall'
  | 'caption';

type RenderElement =
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4';

export interface TextProps {
  children: ReactNode;

  /**
   * Visual typography style (drives font size, line height, weight, spacing)
   */
  variant?: TextVariant;

  /**
   * Semantic HTML override
   * If omitted, uses variant default mapping
   */
  renderAs?: RenderElement;

  /**
   * Tokenized text color override
   */
  color?: string;

  /**
   * Emphasis styling
   */
  italic?: boolean;
  underline?: boolean;

  /**
   * Layout behavior for UI text
   */
  align?: 'left' | 'center' | 'right';

  /**
   * Single-line truncation
   */
  truncate?: boolean;

  /**
   * Monospace mode (for metrics / code-like UI text)
   */
  mono?: boolean;
}

/* ---------------------------------------
   Semantic default rendering
---------------------------------------- */

const defaultRenderMap: Record<
  TextVariant,
  RenderElement
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  bodySmall: 'span',
  caption: 'span',
};

/* ---------------------------------------
   Base typography styles (from tokens)
---------------------------------------- */

type StyledTextProps = React.PropsWithChildren<{
  $variant: TextVariant;
  $color?: string;
  $italic?: boolean;
  $underline?: boolean;
  $align?: 'left' | 'center' | 'right';
  $truncate?: boolean;
  $mono?: boolean;
}>;

const baseStyles = ({
  $variant,
  $color,
  $italic,
  $underline,
  $align,
  $truncate,
  $mono,
}: StyledTextProps) => {
  const style = typography.text[$variant];

  return css`
    margin: 0;
    padding: 0;

    color: ${$color ??
    color.text.primary.default};

    font-family: ${$mono
      ? 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
      : typography.fontFamily.primary};

    font-size: ${style.fontSize};
    line-height: ${style.lineHeight};
    font-weight: ${style.fontWeight};
    letter-spacing: ${style.letterSpacing};

    text-align: ${$align ?? 'left'};

    font-style: ${$italic
      ? 'italic'
      : 'normal'};

    text-decoration: ${$underline
      ? 'underline'
      : 'none'};

    overflow-wrap: break-word;

    ${$truncate &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  `;
};

/* ---------------------------------------
   Real semantic element components
---------------------------------------- */

const H1 = styled.h1<StyledTextProps>(
  baseStyles
);

const H2 = styled.h2<StyledTextProps>(
  baseStyles
);

const H3 = styled.h3<StyledTextProps>(
  baseStyles
);

const H4 = styled.h4<StyledTextProps>(
  baseStyles
);

const P = styled.p<StyledTextProps>(
  baseStyles
);

const Span = styled.span<StyledTextProps>(
  baseStyles
);

/* ---------------------------------------
   Component mapping
---------------------------------------- */

const componentMap: Record<
  RenderElement,
  React.ComponentType<StyledTextProps>
> = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  span: Span,
};

/* ---------------------------------------
   Text component
---------------------------------------- */

export const Text = ({
  children,
  variant = 'body',
  renderAs,
  color,
  italic,
  underline,
  align,
  truncate,
  mono,
}: TextProps) => {
  const element =
    renderAs ??
    defaultRenderMap[variant];

  const Component =
    componentMap[element];

  return (
    <Component
      $variant={variant}
      $color={color}
      $italic={italic}
      $underline={underline}
      $align={align}
      $truncate={truncate}
      $mono={mono}
    >
      {children}
    </Component>
  );
};