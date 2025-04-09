#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const chalk = require("chalk");

// Constants
const THEME_NAME = "matsu-theme";
const REQUIRED_TAILWIND_VERSION = "4.0.0";
const REQUIRED_DAISYUI_VERSION = "5.0.0";
// Get the path to the theme file
const THEME_FILE_PATH = path.join(__dirname, "matsu-theme.css");

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

  // Read theme content from external file
  let themeContent;
  try {
    themeContent = fs.readFileSync(THEME_FILE_PATH, "utf8");
  } catch (error) {
    console.error(chalk.red(`Error reading theme file: ${error.message}`));
    return false;
  }

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
            let updatedContent = content.replace(themeRegex, themeContent);
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
          `@plugin "daisyui";\n${themeContent}`
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
