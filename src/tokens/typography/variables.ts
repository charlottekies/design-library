import { rawTypography as raw } from './raw';

export const variables = `
:root {
  /* Font Families */

  --font-family-primary: ${raw.fontFamily.sans};
  --font-family-mono: ${raw.fontFamily.mono};

  /* ==========================================================================
     H1
  ========================================================================== */

  --text-h1-font-size: ${raw.fontSize[700]};
  --text-h1-line-height: ${raw.lineHeight[700]};
  --text-h1-font-weight: ${raw.fontWeight.bold};
  --text-h1-letter-spacing: ${raw.letterSpacing.tightest};

  /* ==========================================================================
     H2
  ========================================================================== */

  --text-h2-font-size: ${raw.fontSize[600]};
  --text-h2-line-height: ${raw.lineHeight[600]};
  --text-h2-font-weight: ${raw.fontWeight.bold};
  --text-h2-letter-spacing: ${raw.letterSpacing.tighter};

  /* ==========================================================================
     H3
  ========================================================================== */

  --text-h3-font-size: ${raw.fontSize[500]};
  --text-h3-line-height: ${raw.lineHeight[500]};
  --text-h3-font-weight: ${raw.fontWeight.semibold};
  --text-h3-letter-spacing: ${raw.letterSpacing.tight};

  /* ==========================================================================
     H4
  ========================================================================== */

  --text-h4-font-size: ${raw.fontSize[400]};
  --text-h4-line-height: ${raw.lineHeight[400]};
  --text-h4-font-weight: ${raw.fontWeight.semibold};
  --text-h4-letter-spacing: ${raw.letterSpacing.normal};

  /* ==========================================================================
     BODY
  ========================================================================== */

  --text-body-font-size: ${raw.fontSize[300]};
  --text-body-line-height: ${raw.lineHeight[300]};
  --text-body-font-weight: ${raw.fontWeight.regular};
  --text-body-letter-spacing: ${raw.letterSpacing.normal};

  /* ==========================================================================
     BODY SMALL
  ========================================================================== */

  --text-body-small-font-size: ${raw.fontSize[200]};
  --text-body-small-line-height: ${raw.lineHeight[200]};
  --text-body-small-font-weight: ${raw.fontWeight.regular};
  --text-body-small-letter-spacing: ${raw.letterSpacing.normal};

  /* ==========================================================================
     CAPTION
  ========================================================================== */

  --text-caption-font-size: ${raw.fontSize[100]};
  --text-caption-line-height: ${raw.lineHeight[100]};
  --text-caption-font-weight: ${raw.fontWeight.regular};
  --text-caption-letter-spacing: ${raw.letterSpacing.loose};
}
`;