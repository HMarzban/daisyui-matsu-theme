# Matsu Theme for DaisyUI

A Studio Ghibli inspired theme for DaisyUI - bringing the magical aesthetics of Ghibli films to your web projects with beautiful, whimsical components.

## Description

This theme captures the essence of Studio Ghibli's enchanting art style, featuring a unique color palette inspired by films like "My Neighbor Totoro," "Spirited Away," and "Howl's Moving Castle." The design incorporates soft watercolor textures, warm earth tones, and whimsical elements that evoke the magical world of Ghibli.

## Features

- Beautiful Ghibli Studio inspired color palette
- Watercolor paper texture
- Clean and modern design
- Easy to customize
- Progressive Web App (PWA) support
  - Works offline
  - Installable on mobile devices
  - Automatic updates

## Installation

```bash
# Clone the repository
git clone https://github.com/HMarzban/daisyui-matsu-theme.git

# Navigate to the project directory
cd daisyui-matsu-theme

# Install dependencies
npm install
# or
yarn
# or
bun install

# Start the development server
npm run dev
# or
yarn dev
# or
bun run dev
```

## Usage

The theme is available as a DaisyUI theme. You can use it in your project by adding it to your `tailwind.config.js` file:

```js
module.exports = {
  // ...
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ["matsu"],
  },
}
```

## Tech Stack

- React
- Vite
- TypeScript
- TailwindCSS
- DaisyUI

## Deployment

This project is configured for GitHub Pages deployment. The deployment process is automated using GitHub Actions.

### Manual Deployment

You can manually deploy the application using:

```bash
npm run deploy
```

### Automated Deployment

The application is automatically deployed to GitHub Pages when changes are pushed to the main branch. The GitHub Actions workflow handles the build and deployment process.

### Asset Paths

For proper asset loading on GitHub Pages, all asset paths in the components use relative paths (`./assets/...`). This ensures that assets are correctly loaded when the application is deployed to a subdirectory on GitHub Pages.

## Author

- [M.Hossein](https://github.com/HMarzban)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
