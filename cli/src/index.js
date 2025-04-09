#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const chalk = require("chalk");

// Constants
const THEME_NAME = "matsu-theme";
const REQUIRED_TAILWIND_VERSION = "4.0.0";
const REQUIRED_DAISYUI_VERSION = "5.0.0";

// Helper functions
function checkDependency(name, requiredVersion) {
  try {
    // Try to find the package.json in the current directory
    const packageJsonPath = path.join(process.cwd(), "package.json");

    if (!fs.existsSync(packageJsonPath)) {
      console.error(
        chalk.red(`Error: Cannot find package.json in the current directory.`)
      );
      return false;
    }

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

    // Check dependencies and devDependencies
    const dependencies = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    };

    if (!dependencies[name]) {
      console.error(
        chalk.red(`Error: ${name} is not installed. Please install it first.`)
      );
      return false;
    }

    // Extract version from semver notation
    const installedVersion = dependencies[name].replace(/[^0-9.]/g, "");

    // Simple semver comparison for major version
    const installedMajor = parseInt(installedVersion.split(".")[0], 10);
    const requiredMajor = parseInt(requiredVersion.split(".")[0], 10);

    if (installedMajor < requiredMajor) {
      console.error(
        chalk.red(
          `Error: ${name} version ${installedVersion} is lower than required version ${requiredVersion}.`
        )
      );
      return false;
    }

    return true;
  } catch (error) {
    console.error(
      chalk.red(`Error checking dependency ${name}: ${error.message}`)
    );
    return false;
  }
}

function findStyleFiles() {
  // Find all CSS/SCSS files in the project
  const styleFiles = [];

  function scanDir(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (
        stat.isDirectory() &&
        !file.startsWith("node_modules") &&
        !file.startsWith(".git")
      ) {
        scanDir(filePath);
      } else if (file.endsWith(".css") || file.endsWith(".scss")) {
        styleFiles.push(filePath);
      }
    }
  }

  scanDir(process.cwd());
  return styleFiles;
}

function checkAndAppendTheme() {
  // Find style files
  const styleFiles = findStyleFiles();

  if (styleFiles.length === 0) {
    console.error(
      chalk.red(`Error: No CSS or SCSS files found in the project.`)
    );
    return false;
  }

  let tailwindImportFound = false;
  let daisyuiPluginFound = false;
  let themeAppended = false;

  for (const file of styleFiles) {
    const content = fs.readFileSync(file, "utf8");

    // Check if file imports tailwindcss
    if (content.includes('@import "tailwindcss"')) {
      tailwindImportFound = true;

      // Check if file has daisyui plugin
      if (content.includes('@plugin "daisyui"')) {
        daisyuiPluginFound = true;

        // Check if our theme is already appended
        if (content.includes('@plugin "daisyui/theme" {')) {
          // Check if specifically matsu theme is already installed
          if (content.includes('name: "matsu"')) {
            console.log(
              chalk.yellow(`Matsu theme is already installed in ${file}`)
            );
            themeAppended = true;
            continue;
          } else {
            console.log(
              chalk.yellow(
                `A different daisyUI theme is already installed in ${file}. Will replace with matsu theme.`
              )
            );

            // Replace the existing theme with our matsu theme
            const themeRegex = /@plugin\s+"daisyui\/theme"\s+{[\s\S]*?}/;
            const matsuTheme = `@plugin "daisyui/theme" {
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
}`;

            let updatedContent = content.replace(themeRegex, matsuTheme);
            fs.writeFileSync(file, updatedContent);
            console.log(
              chalk.green(
                `Successfully replaced existing theme with matsu theme in ${file}`
              )
            );
            themeAppended = true;
            continue;
          }
        }

        // Append our theme after daisyui plugin
        let updatedContent = content.replace(
          '@plugin "daisyui";',
          `@plugin "daisyui";
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
}`
        );

        fs.writeFileSync(file, updatedContent);
        console.log(
          chalk.green(`Successfully appended matsu theme to ${file}`)
        );
        themeAppended = true;
      }
    }
  }

  if (!tailwindImportFound) {
    console.error(
      chalk.red(`Error: No file with '@import "tailwindcss"' found.`)
    );
    return false;
  }

  if (!daisyuiPluginFound) {
    console.error(chalk.red(`Error: No file with '@plugin "daisyui"' found.`));
    return false;
  }

  return themeAppended;
}

// Main function
function main() {
  console.log(chalk.blue(`🎭 Installing ${THEME_NAME} for daisyUI...`));

  // Check dependencies
  const hasTailwind = checkDependency("tailwindcss", REQUIRED_TAILWIND_VERSION);
  const hasDaisyUI = checkDependency("daisyui", REQUIRED_DAISYUI_VERSION);

  if (!hasTailwind || !hasDaisyUI) {
    console.log(
      chalk.yellow(`Please install the required dependencies and try again:`)
    );

    if (!hasTailwind) {
      console.log(chalk.white(`  npm install tailwindcss@latest`));
      console.log(chalk.white(`  # or`));
      console.log(chalk.white(`  yarn add tailwindcss@latest`));
    }

    if (!hasDaisyUI) {
      console.log(chalk.white(`  npm install daisyui@latest`));
      console.log(chalk.white(`  # or`));
      console.log(chalk.white(`  yarn add daisyui@latest`));
    }

    process.exit(1);
  }

  // Check and append theme
  const success = checkAndAppendTheme();

  if (success) {
    console.log(chalk.green(`✅ Successfully installed ${THEME_NAME}!`));
    console.log(
      chalk.blue(
        `To use the theme, make sure you have this in your tailwind.config.js:`
      )
    );
    console.log(
      chalk.white(`
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
};
    `)
    );
  } else {
    console.error(chalk.red(`❌ Failed to install ${THEME_NAME}.`));
    process.exit(1);
  }
}

// Run the main function
main();
