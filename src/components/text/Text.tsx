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

type TextWeight =
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold';

export interface TextProps {
  children: ReactNode;

  variant?: TextVariant;
  renderAs?: RenderElement;

  color?: string;

  italic?: boolean;
  underline?: boolean;
  weight?: TextWeight;

  align?: 'left' | 'center' | 'right';
  truncate?: boolean;

  mono?: boolean;
}

/* ---------------------------------------
   Default rendering
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
   Weight map
---------------------------------------- */

const weightMap: Record<TextWeight, string> = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

/* ---------------------------------------
   Styled props
---------------------------------------- */

type StyledTextProps = {
  children?: ReactNode;

  $variant: TextVariant;
  $color?: string;
  $italic?: boolean;
  $underline?: boolean;
  $weight?: TextWeight;
  $align?: 'left' | 'center' | 'right';
  $truncate?: boolean;
  $mono?: boolean;
};

/* ---------------------------------------
   Base styles
---------------------------------------- */

const baseStyles = ({
  $variant,
  $color,
  $italic,
  $underline,
  $weight,
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
    letter-spacing: ${style.letterSpacing};

    font-weight: ${
      $weight
        ? weightMap[$weight]
        : style.fontWeight
    };

    font-style: ${$italic
      ? 'italic'
      : 'normal'};

    text-decoration: ${$underline
      ? 'underline'
      : 'none'};

    text-align: ${$align ?? 'left'};

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
   Element components
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
   Component map
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
  weight,
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
      $weight={weight}
      $align={align}
      $truncate={truncate}
      $mono={mono}
    >
      {children}
    </Component>
  );
};