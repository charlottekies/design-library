# General
This repository holds and exports design elements that can be used to build a website. 

## Structure
In the src directory you will find:
```
> components
  - This is where custom buttons, sidebars, input fields, and other type of React components are held

> icons
  - In here as you might expect, are custom-designed icons with variable sizes (e.g. pencil, home, book...)

> tokens
  - color tokens and spacing tokens are among the tokens that exist in here. You may use them to apply colors and consistent spacing to your website components

> stories
  - This is where every exported component's Storybook story will be defined.
```

<br>

## Customizing colors
Our color tokens come out of the box with a default color scheme, meaning hex codes for all of the color tokens you can use are already defined. Nothing for you to do! 

#### Example: 
```
import { color } from "@charlottekies/design-library/tokens";

export function Card() {
  return (
    <div
      style={{
        background: color.surface.default,
        color: color.text.primary.default,
      }}
    >
      Hello world
    </div>
  );
}
```

### Defining your own colors
If you want to define your own brand, you can modify the colors for each of our defined colors, while still making use of the same tokens: 

#### Example: 
```
// In your project's theme/global/index.css
:root {
  --color-surface-default: #ffffff;
  --color-text-primary: #111827;

  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-primary-pressed: #1e40af;

  --color-text-inverse: #ffffff;
}
```

Then you can go about using the semantic color tokens as normal, but you will see your own colors appear!

*********

## Playground
The playground directory is an area in which to test the functionality of the components exported from the src directory. 

******
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
