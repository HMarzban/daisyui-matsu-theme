# ✨ Matsu Theme for DaisyUI

Hey there! Welcome to **Matsu** - a magical Studio Ghibli inspired theme for DaisyUI that brings the whimsical charm of Ghibli films to your web projects! 🌿

![Matsu Theme Preview](./public/Gn_FI12XsAA2vPu.jpeg)

## 🌟 What's This All About?

Matsu captures the enchanting spirit of Studio Ghibli's art style with:

- Soft watercolor textures that feel like hand-painted scenes
- Warm, earthy tones inspired by "My Neighbor Totoro," "Spirited Away," and "Howl's Moving Castle"
- Whimsical UI components that add a touch of magic to your projects
- A clean, modern design that's both functional and beautiful

## 🔧 CLI Tool

**Add Matsu to your project in seconds:**

```bash
npx daisyui-matsu-theme
```

That's it! The CLI automatically detects and configures your DaisyUI project.

[More CLI options →](./cli/README.md)

## Manual Installation

`globals.css`
Copy and paste the matsu theme to your project's globals.css file to install the theme with all variables and texture setup.

```css
/* Add PT Serif font import for headings */
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap");
/* Add Nunito font import for body text */
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap");

@import "tailwindcss";
@plugin "daisyui";
@plugin "daisyui/theme" {
  name: "matsu";
  default: true; /* set as default */
  prefersdark: false; /* set as default dark mode (prefers-color-scheme:dark) */
  color-scheme: light; /* color of browser-provided UI */

  /* Base colors - mapping from shadcn */
  --color-base-100: oklch(0.91 0.048 83.6); /* background */
  --color-base-200: oklch(0.92 0.042 83.6); /* card/popover */
  --color-base-300: oklch(0.86 0.064 83.7); /* muted */
  --color-base-content: oklch(0.41 0.077 78.9); /* foreground */

  /* Primary colors */
  --color-primary: oklch(0.71 0.097 111.7);
  --color-primary-content: oklch(0.98 0.005 0);
  --color-primary-focus: oklch(0.59 0.096 111.8); /* primary-border */

  /* Secondary colors */
  --color-secondary: oklch(0.88 0.055 83.6);
  --color-secondary-content: oklch(0.51 0.077 78.9);

  /* Accent colors */
  --color-accent: oklch(0.86 0.055 83.6);
  --color-accent-content: oklch(0.26 0.016 0);

  /* Neutral colors - for borders and subtle elements */
  --color-neutral: oklch(0.74 0.063 80.8); /* border/input */
  --color-neutral-content: oklch(0.51 0.077 74.3); /* ring/muted-foreground */

  /* Info colors - from chart colors */
  --color-info: oklch(0.68 0.16 184.9); /* chart-2 */
  --color-info-content: oklch(0.98 0.005 0);

  /* Success colors */
  --color-success: oklch(0.85 0.19 85.4); /* chart-4 */
  --color-success-content: oklch(0.98 0.005 0);

  /* Warning colors */
  --color-warning: oklch(0.74 0.19 66.3); /* chart-5 */
  --color-warning-content: oklch(0.98 0.005 0);

  /* Error colors - maps to destructive */
  --color-error: oklch(0.63 0.24 29.2); /* destructive */
  --color-error-content: oklch(0.97 0.018 0); /* destructive-foreground */

  /* border radius */
  --radius-selector: 0.625rem; /* checkboxes, toggles, badges */
  --radius-field: 0.625rem; /* buttons, inputs, selects, tabs */
  --radius-box: 0.625rem; /* cards, modals, alerts */

  /* Base sizes */
  --size-selector: 0.25rem;
  --size-field: 0.25rem;

  /* Border size */
  --border: 2px;

  /* Effects */
  --depth: 1; /* For shadow effect - matsu uses custom shadow-primary */
  --noise: 0;
}

:root:has(input.theme-controller[value="matsu"]:checked),
[data-theme="matsu"] {
  /* Typography */
  --font: "Nunito", sans-serif;
  --font-family: "Nunito", sans-serif;
  --font-family-serif: "PT Serif", serif;
  --font-weight-light: 700;
  --font-weight-normal: 700;
  --font-weight-medium: 700;
  --font-weight-semibold: 700;
  --font-weight-bold: 700;

  --primary-border: oklch(0.59 0.096 111.8);
  --destructive: oklch(0.63 0.24 29.2);
  --destructive-border: oklch(0.43 0.24 29.2);

  /* Shadows */
  --shadow-xs: 0 2px 0 0 oklch(0.74 0.063 80.8);
  --shadow-sm: 0 2px 0 0 oklch(0.74 0.063 80.8);
  --shadow-md: 0 2px 0 0 oklch(0.74 0.063 80.8);
  --shadow-lg: 0 2px 0 0 oklch(0.74 0.063 80.8);
  --shadow-xl: 0 2px 0 0 oklch(0.74 0.063 80.8);

  body {
    font-family: var(--font-family);
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }

  /* Custom shadows from matsu theme */
  .shadow-primary {
    box-shadow: 0 2px 0 0 var(--color-primary-focus);
  }

  .shadow-destructive {
    box-shadow: 0 2px 0 0 var(--color-error);
  }

  .shadow-destructive-border {
    box-shadow: 0 2px 0 0 var(--color-error);
  }

  /* Custom component styles to mimic matsu shadcn components */
  .btn {
    font-weight: 700;
    gap: 0.5rem;
    border-width: 2px;
    background-size: 100% 100%;
    transition: all 150ms;
  }

  .btn-primary {
    box-shadow: 0 2px 0 0 var(--color-primary-focus);
  }

  .btn-error {
    box-shadow: 0 2px 0 0 var(--color-error);
  }

  /* Input with matsu style */
  .input {
    border-width: 2px;
    font-weight: 500;
  }

  /* Card with matsu style */
  .card {
    border-width: 2px;
  }

  .card-title {
    font-family: var(--font-family);
    font-weight: 700;
  }

  /* Alert with matsu style */
  .alert {
    border-width: 2px;
  }

  .texture {
    background-image: url(https://hmarzban.github.io/daisyui-matsu-theme/assets/texture.jpg);
    background-size: 100% 100%;
    background-repeat: repeat;
    opacity: 0.12;
    mix-blend-mode: multiply;
    z-index: 100;
    isolation: isolate;
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100dvh;
    pointer-events: none;
  }
}
```

`index.html`
Alternatively, you can simply add the data-theme="matsu" attribute to your HTML element like:

```html
<html data-theme="matsu">
  <!-- Your content here -->
</html>
```

`layout.tsx`
Create a custom layout component in your project and wrap your pages with it to use the theme.

```tsx
import React from "react";

type prop = {
  children: React.ReactNode;
};

export default function Layout({ children }: prop) {
  return (
    <div className="relative">
      <div className="texture" />
      {children}
    </div>
  );
}
```

## 🙋‍♂️ How Can You Help?

### Feedback & Contributions

- **Found a bug?** [Open an issue](https://github.com/HMarzban/daisyui-matsu-theme/issues)
- **Have an idea?** Share it on [Twitter/X](https://x.com/mhossein_) or through issues
- **Want to contribute?** Fork, code, and submit a pull request
- **Like the project?** Star it and share with friends

Your support helps make this project better for everyone!

## 📄 License

Released under the MIT License - so you're free to create your own magic with it!
