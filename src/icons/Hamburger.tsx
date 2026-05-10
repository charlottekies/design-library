import { BaseIcon } from './BaseIcon';
import type { IconProps } from './types';

export const Hamburger = (props: IconProps) => (
  <BaseIcon {...props}>
    <path
      d="M4 4H20"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M4 12H20"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M4 20H20"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </BaseIcon>
);