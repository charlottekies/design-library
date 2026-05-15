import { raw } from "./raw";


export const variables = `
:root {
  --radius-none: ${raw.radius0};

  --radius-sm: ${raw.radius200};
  --radius-md: ${raw.radius400};
  --radius-lg: ${raw.radius500};

  --radius-full: ${raw.radiusFull};
}
`;