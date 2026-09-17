# Changelog

## 0.2.1 — 2026-09-17

- Preserve existing themes, CSS rules, and the selected default when adding Matsu.
- Leave customized Matsu definitions unchanged when the installer runs again.
- Add `--dry-run` and `--file` for projects with more than one stylesheet.
- Parse CSS with PostCSS and reject invalid or ambiguous entries before writing.
- Include the MIT license in the published package and remove the recursive publish script.

The npm registry already contains 0.2.0, although its `latest` tag points to 0.1.6. This release uses the next unused version.
