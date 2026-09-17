const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const postcss = require("postcss");
const cli = path.resolve(__dirname, "../src/index.js");

function fixture(t, css, manifest = { devDependencies: { tailwindcss: "^4.1.0", daisyui: "^5.0.0" } }) {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), "matsu-test-"));
  t.after(() => fs.rmSync(cwd, { recursive: true, force: true }));
  fs.writeFileSync(path.join(cwd, "package.json"), JSON.stringify(manifest));
  fs.writeFileSync(path.join(cwd, "style.css"), css);
  return { cwd, read: () => fs.readFileSync(path.join(cwd, "style.css"), "utf8"), run: (...args) => spawnSync(process.execPath, [cli, ...args], { cwd, encoding: "utf8" }) };
}
const base = '@import "tailwindcss";\n@plugin "daisyui";\n';
const otherTheme = '@plugin "daisyui/theme" { name: "existing"; default: true; --color-primary: red; }';

test("preserves existing theme and CSS, adds an opt-in Matsu, and is byte-idempotent", (t) => {
  const original = base + otherTheme + '\n.custom { color: blue; }\n';
  const f = fixture(t, original);
  assert.equal(f.run().status, 0);
  const installed = f.read();
  assert.ok(installed.includes(original.trim()));
  const root = postcss.parse(installed);
  const themes = [];
  root.walkAtRules("plugin", (node) => { if (node.params === '"daisyui/theme"') themes.push(node); });
  assert.equal(themes.length, 2);
  assert.equal(themes[1].nodes.find((node) => node.prop === "default").value, "false");
  assert.equal(f.run().status, 0);
  assert.equal(f.read(), installed);
});

test("supports single quotes, whitespace, configured plugins and nested CSS", (t) => {
  const original = "@import 'tailwindcss';\n@plugin   'daisyui' { themes: light --default, dark; }\n.card { &:hover { color: red; } }\n";
  const f = fixture(t, original);
  assert.equal(f.run().status, 0);
  assert.ok(f.read().includes(original.trim()));
  assert.match(f.read(), /name: "matsu"/);
});

test("an existing customized Matsu is not overwritten or duplicated", (t) => {
  const original = base + "@plugin 'daisyui/theme' { name : 'matsu'; --color-primary: pink; }";
  const f = fixture(t, original);
  assert.equal(f.run().status, 0);
  assert.equal(f.read(), original);
});

test("commented-out directives and Matsu names do not count as installation", (t) => {
  const f = fixture(t, base + '/* @plugin "daisyui/theme" { name: "matsu"; } */');
  assert.equal(f.run().status, 0);
  let count = 0;
  postcss.parse(f.read()).walkAtRules("plugin", (node) => { if (node.params === '"daisyui/theme"') count++; });
  assert.equal(count, 1);
});

test("dry-run describes its target without writing", (t) => {
  const f = fixture(t, base + otherTheme);
  const result = f.run("--dry-run");
  assert.equal(result.status, 0);
  assert.match(result.stdout, /Would add Matsu/);
  assert.equal(f.read(), base + otherTheme);
});

test("ambiguous entries require --file and leave the other entry untouched", (t) => {
  const f = fixture(t, base);
  fs.writeFileSync(path.join(f.cwd, "other.css"), base);
  assert.equal(f.run().status, 1);
  assert.equal(f.read(), base);
  assert.equal(f.run("--file", "style.css").status, 0);
  assert.equal(fs.readFileSync(path.join(f.cwd, "other.css"), "utf8"), base);
});

test("ignores generated directories and symlink loops", (t) => {
  const f = fixture(t, base);
  fs.mkdirSync(path.join(f.cwd, "dist"));
  fs.writeFileSync(path.join(f.cwd, "dist", "style.css"), base);
  fs.symlinkSync(f.cwd, path.join(f.cwd, "loop"), "dir");
  assert.equal(f.run().status, 0);
  assert.equal(fs.readFileSync(path.join(f.cwd, "dist", "style.css"), "utf8"), base);
});

for (const [name, css, manifest] of [
  ["missing plugin", '@import "tailwindcss";'],
  ["commented configuration", '/* @import "tailwindcss"; @plugin "daisyui"; */'],
  ["invalid CSS", base + '.broken {'],
  ["missing dependencies", base, {}],
  ["old version", base, { dependencies: { tailwindcss: "^3.0.0", daisyui: "5.0.0" } }],
  ["unverified version tag", base, { dependencies: { tailwindcss: "latest", daisyui: "5.0.0" } }],
]) {
  test(`${name} fails without changing CSS`, (t) => {
    const f = fixture(t, css, manifest);
    assert.equal(f.run().status, 1);
    assert.equal(f.read(), css);
  });
}
