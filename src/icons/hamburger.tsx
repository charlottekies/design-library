import { color } from '../tokens/semantic-color';

export const Hamburger = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    style={{ color: color.text.primary.default }}
    {...props}
  >
    <path d="M4 4H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    <path d="M4 12H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    <path d="M4 20H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
  </svg>
);