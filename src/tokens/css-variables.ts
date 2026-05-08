import { raw } from "./raw";

export const cssVariables = `
:root {
  --color-surface-default: ${raw.gray100};
  --color-surfuace-secondary: ${raw.eggshell};

  // TEXT
  --color-text-primary: ${raw.gray500};
  --color-text-inverse: ${raw.white};

  // BRAND
  --color-primary: ${raw.purple300};
  --color-primary-hover: ${raw.purple200};
  --color-primary-pressed: ${raw.purple400};
  --color-primary-disabled: ${raw.gray200};

  --color-border-primary: ${raw.gray300};
  --color-border-highlight: ${raw.purple300};
}
`;