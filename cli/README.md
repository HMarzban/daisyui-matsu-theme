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

## What the installer does

1. Checks package.json for declared Tailwind CSS v4+ and DaisyUI v5+ versions.
2. Finds the entry stylesheet containing both the Tailwind import and DaisyUI plugin. Multiple entries require `--file`.
3. Adds Matsu without replacing existing themes, rules, or the project's default theme. Select it with `<html data-theme="matsu">`.
4. Leaves an existing Matsu definition untouched, including your customizations. Re-running is a no-op.

It skips generated directories, dot directories, and symlinks. Invalid CSS or an unsupported project fails before writing. Use manual installation for split configuration or dependency versions declared through tags/workspace aliases.

## Test the CLI from source

Version 0.2.1 includes theme preservation, `--dry-run`, and `--file`. To test a local checkout:

```bash
# In this repository
npm ci --prefix cli
npm test --prefix cli

# From the target project, using an absolute path to this checkout
node /path/to/daisyui-matsu-theme/cli/src/index.js --dry-run
node /path/to/daisyui-matsu-theme/cli/src/index.js --file src/styles.css
```

`--dry-run` reports the file it would update without writing. The stylesheet must be inside the current project. The fixture suite covers existing/customized themes, reruns, quoting and formatting, configured plugins, ambiguous entries, dry runs, and invalid projects. Running the tests requires Node 18+; the CLI runtime supports Node 14+.

## License

MIT
