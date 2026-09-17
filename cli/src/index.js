#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const chalk = require("chalk");

const THEME_FILE_PATH = path.join(__dirname, "matsu-theme.css");
const IGNORED_DIRECTORIES = new Set(["node_modules", "dist", "build", "coverage"]);
const unquote = (value) => value.trim().replace(/^(['"])(.*)\1$/, "$2");

function checkDependencies(cwd) {
  const manifest = JSON.parse(fs.readFileSync(path.join(cwd, "package.json"), "utf8"));
  const dependencies = { ...manifest.dependencies, ...manifest.devDependencies };
  for (const [name, minimum] of [["tailwindcss", 4], ["daisyui", 5]]) {
    const declared = dependencies[name] || "";
    // Unknown tags, URLs and workspace aliases need manual installation, not a guessed version.
    const match = declared.match(/^(?:\^|~|>=|=)?\s*(\d+)(?:\.|$)/);
    if (!match || Number(match[1]) < minimum) {
      throw new Error(`Declare ${name} v${minimum}+ in package.json before installing Matsu (found ${declared || "missing"}).`);
    }
  }
}

function findStyleFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isSymbolicLink() || entry.name.startsWith(".")) return [];
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) return IGNORED_DIRECTORIES.has(entry.name) ? [] : findStyleFiles(file);
    return /\.(css|scss)$/.test(entry.name) ? [file] : [];
  }).sort();
}

function isEntry(root) {
  return root.nodes.some((node) => node.type === "atrule" && node.name === "import" && /^(['"])tailwindcss\1(?:\s|$)/.test(node.params)) &&
    root.nodes.some((node) => node.type === "atrule" && node.name === "plugin" && unquote(node.params) === "daisyui");
}

function addTheme(content, file) {
  const root = postcss.parse(content, { from: file });
  if (!isEntry(root)) throw new Error(`${file} must contain a Tailwind import and a daisyUI plugin at the top level.`);
  let installed = false;
  root.walkAtRules("plugin", (plugin) => {
    if (unquote(plugin.params) !== "daisyui/theme") return;
    plugin.each((node) => {
      if (node.type === "decl" && node.prop === "name" && unquote(node.value) === "matsu") installed = true;
    });
  });
  if (installed) return content;

  const theme = postcss.parse(fs.readFileSync(THEME_FILE_PATH, "utf8"));
  // Adding a theme should preserve the project's chosen default as well as its CSS.
  theme.walkAtRules("plugin", (plugin) => {
    plugin.walkDecls("default", (decl) => { decl.value = "false"; });
  });
  const imports = [];
  theme.walkAtRules("import", (node) => { imports.push(node.clone()); node.remove(); });
  // CSS imports must precede normal rules. Leave existing rules and themes in place.
  root.prepend(...imports);
  root.append(theme.nodes);
  return root.toString();
}

function main(args = process.argv.slice(2), cwd = process.cwd()) {
  const dryRun = args.includes("--dry-run");
  let selected;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--dry-run") continue;
    if (args[i] === "--file" && args[i + 1] && !args[i + 1].startsWith("--")) selected = args[++i];
    else throw new Error("Usage: daisyui-matsu-theme [--dry-run] [--file path/to/styles.css]");
  }
  checkDependencies(cwd);
  const files = selected ? [path.resolve(cwd, selected)] : findStyleFiles(cwd);
  const candidates = files.filter((file) => {
    // Never follow symlinks out of the selected project, including explicit paths.
    const relative = path.relative(fs.realpathSync(cwd), fs.realpathSync(file));
    if (relative.startsWith(`..${path.sep}`) || relative === ".." || path.isAbsolute(relative)) throw new Error("Choose a stylesheet inside the current project.");
    return isEntry(postcss.parse(fs.readFileSync(file, "utf8"), { from: file }));
  });
  if (candidates.length !== 1) {
    throw new Error(candidates.length ? `Multiple Tailwind entry stylesheets found. Select one with --file:\n${candidates.join("\n")}` : "No stylesheet contains both a Tailwind import and a daisyUI plugin. Use --file to select your entry stylesheet.");
  }
  const file = candidates[0];
  const content = fs.readFileSync(file, "utf8");
  const updated = addTheme(content, file);
  if (updated === content) {
    console.log(chalk.yellow(`Matsu is already installed in ${file}; no changes made.`));
    return;
  }
  if (dryRun) {
    console.log(chalk.blue(`Would add Matsu to ${file}; no files changed. Existing themes and default selection are preserved.`));
    return;
  }
  fs.writeFileSync(file, updated);
  console.log(chalk.green(`Added Matsu to ${file}. Existing themes and default selection are preserved.`));
  console.log('Choose Matsu with data-theme="matsu" on your HTML element.');
}

if (require.main === module) {
  try { main(); }
  catch (error) { console.error(chalk.red(`Error: ${error.message}`)); process.exitCode = 1; }
}

module.exports = { addTheme, main };
