# DaisyUI Matsu Theme CLI

A CLI tool to add the Matsu theme to your DaisyUI v5+ and TailwindCSS v4+ project.

## Prerequisites

- TailwindCSS v4.0.0 or higher
- DaisyUI v5.0.0 or higher
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

## Theme Preview

The Matsu theme is inspired by Studio Ghibli's aesthetic, featuring:

- Soft, warm colors
- Hand-drawn style borders
- Friendly, rounded shapes
- Nostalgic feel

## License

MIT
