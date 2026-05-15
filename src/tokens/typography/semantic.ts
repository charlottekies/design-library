export const typography = {
  fontFamily: {
    primary: 'var(--font-family-primary)',
    mono: 'var(--font-family-mono)',
  },

  text: {
    h1: {
      fontSize: 'var(--text-h1-font-size)',
      lineHeight: 'var(--text-h1-line-height)',
      fontWeight: 'var(--text-h1-font-weight)',
      letterSpacing:
        'var(--text-h1-letter-spacing)',
    },

    h2: {
      fontSize: 'var(--text-h2-font-size)',
      lineHeight: 'var(--text-h2-line-height)',
      fontWeight: 'var(--text-h2-font-weight)',
      letterSpacing:
        'var(--text-h2-letter-spacing)',
    },

    h3: {
      fontSize: 'var(--text-h3-font-size)',
      lineHeight: 'var(--text-h3-line-height)',
      fontWeight: 'var(--text-h3-font-weight)',
      letterSpacing:
        'var(--text-h3-letter-spacing)',
    },

    h4: {
      fontSize: 'var(--text-h4-font-size)',
      lineHeight: 'var(--text-h4-line-height)',
      fontWeight: 'var(--text-h4-font-weight)',
      letterSpacing:
        'var(--text-h4-letter-spacing)',
    },

    body: {
      fontSize: 'var(--text-body-font-size)',
      lineHeight: 'var(--text-body-line-height)',
      fontWeight:
        'var(--text-body-font-weight)',
      letterSpacing:
        'var(--text-body-letter-spacing)',
    },

    bodySmall: {
      fontSize:
        'var(--text-body-small-font-size)',
      lineHeight:
        'var(--text-body-small-line-height)',
      fontWeight:
        'var(--text-body-small-font-weight)',
      letterSpacing:
        'var(--text-body-small-letter-spacing)',
    },

    caption: {
      fontSize:
        'var(--text-caption-font-size)',
      lineHeight:
        'var(--text-caption-line-height)',
      fontWeight:
        'var(--text-caption-font-weight)',
      letterSpacing:
        'var(--text-caption-letter-spacing)',
    },
  },
} as const;