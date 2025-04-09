# DaisyUI Matsu Theme CLI

A CLI tool to add the Matsu-theme to your DaisyUI project.

![Matsu Theme Preview](https://github.com/HMarzban/daisyui-matsu-theme/blob/main/public/Gn_FI12XsAA2vPu.jpeg?raw=true)

Checkout [demo](https://hmarzban.github.io/daisyui-matsu-theme/)

## Prerequisites

- TailwindCSS `v4.0.0` or higher
- DaisyUI `v5.0.0` or higher
- A CSS file with `@import "tailwindcss"` and `@plugin "daisyui"` declarations

## Installation

```bash
# Install globally
npm install -g daisyui-matsu-theme

# Or run directly with npx
npx daisyui-matsu-theme
```

## Usage

Navigate to your project directory and run:

```bash
npx daisyui-matsu-theme
```

Or if installed globally:

```bash
daisyui-matsu-theme
```

## What it does

1. Checks if TailwindCSS v4+ is installed
2. Checks if DaisyUI v5+ is installed
3. Finds CSS/SCSS files with `@import "tailwindcss"` and `@plugin "daisyui"`
4. Adds the Matsu theme to those files

## License

MIT
