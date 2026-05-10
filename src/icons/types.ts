import type { SVGProps } from 'react';

export type IconSize = 'small' | 'medium' | 'large';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: IconSize;
}