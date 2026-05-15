import type { ReactNode } from 'react';
import { color } from '../tokens/color/semantic';
import { ICON_SIZE_MAP } from './constants';
import type { IconProps } from './types';

interface BaseIconProps extends IconProps {
  children: ReactNode;
}

export const BaseIcon = ({
  size = 'medium',
  style,
  children,
  ...props
}: BaseIconProps) => {
  const dimension = ICON_SIZE_MAP[size];

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
      fill="none"
      style={{
        color: color.text.primary.default,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
};