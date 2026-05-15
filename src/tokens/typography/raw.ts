export const rawTypography = {
  fontFamily: {
    sans: `"Lexend", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
    mono: `"JetBrains Mono", "SF Mono", Monaco, monospace`,
  },

  fontSize: {
    100: '0.75rem',
    200: '0.875rem',
    300: '1rem',
    400: '1.25rem',
    500: '1.5rem',
    600: '1.75rem',
    700: '2rem',
  },

  lineHeight: {
    100: '1rem',
    200: '1.25rem',
    300: '1.5rem',
    400: '1.75rem',
    500: '2rem',
    600: '2.25rem',
    700: '2.5rem',
  },

  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  letterSpacing: {
    tightest: '-0.02em',
    tighter: '-0.015em',
    tight: '-0.01em',
    normal: '0',
    loose: '0.01em',
  },
} as const;