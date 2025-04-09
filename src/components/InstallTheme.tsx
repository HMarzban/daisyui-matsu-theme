import React, { useState, useEffect, useRef } from "react";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import bash from "highlight.js/lib/languages/bash";
import { Download, Copy, X, Check, Terminal, Code } from "lucide-react";

// Register the languages
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("css", css);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("bash", bash);

interface InstallThemeProps {
  cssCode?: string;
  jsCode?: string;
}

const InstallTheme: React.FC<InstallThemeProps> = ({ cssCode, jsCode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState<Record<string, boolean>>({});
  const layoutCodeRef = useRef<HTMLElement>(null);
  const globalCssCodeRef = useRef<HTMLElement>(null);
  const cssCodeRef = useRef<HTMLElement>(null);
  const jsCodeRef = useRef<HTMLElement>(null);

  // Reset copy status when modal closes
  useEffect(() => {
    if (!isModalOpen) {
      setCopyStatus({});
    }
  }, [isModalOpen]);

  // Initialize highlight.js when modal opens
  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        // Highlight all code blocks
        document.querySelectorAll("pre code").forEach((block) => {
          hljs.highlightElement(block as HTMLElement);
        });
      }, 50);
    }
  }, [isModalOpen, cssCode, jsCode]);

  // Copy to clipboard with feedback
  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus({ ...copyStatus, [id]: true });
      setTimeout(() => {
        setCopyStatus((prev) => ({ ...prev, [id]: false }));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const layoutTsxCode = `import React from "react";

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
}`;

  const globalCssCode = `/* Add PT Serif font import for headings */
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
    background-image: url(/assets/texture.jpg);
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
`;

  return (
    <div className="w-full install-theme">
      <h2 className="text-2xl text-center font-bold mb-6">Install theme</h2>
      <p className="text-center mb-6">
        Choose your preferred installation method
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CLI Installation Option */}
        <div className="card bg-base-200 shadow-md hover:shadow-lg transition-all">
          <div className="card-body">
            <h3 className="card-title flex items-center gap-2">
              <Terminal size={20} className="text-primary" />
              CLI Installation
            </h3>
            <p className="text-sm mb-4">
              Quick and easy installation using the command line
            </p>
            <div className="mockup-code border border-base-300 font-mono relative bg-base-100">
              <pre className="m-0 p-4">
                <code className="language-bash">npx daisyui-matsu-theme</code>
              </pre>
              <button
                className={`btn btn-sm absolute top-2 right-2 p-2 ${
                  copyStatus["install-command"]
                    ? "bg-success text-white"
                    : "hover:bg-base-200"
                } rounded-md transition-colors flex items-center gap-1`}
                onClick={() =>
                  copyToClipboard("npx daisyui-matsu-theme", "install-command")
                }
                title="Copy to clipboard"
              >
                {copyStatus["install-command"] ? (
                  <>
                    <Check size={16} />
                    <span className="text-xs">Copied!</span>
                  </>
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Manual Installation Option */}
        <div className="card bg-base-200 shadow-md hover:shadow-lg transition-all">
          <div className="card-body">
            <h3 className="card-title flex items-center gap-2">
              <Code size={20} className="text-primary" />
              Manual Installation
            </h3>
            <p className="text-sm mb-4">
              Advanced installation with full control over the process
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-primary btn-lg w-full gap-2"
            >
              <Download size={16} />
              Get Installation Files
            </button>
          </div>
        </div>
      </div>

      {/* Manual Installation Modal */}
      <dialog className={`modal ${isModalOpen ? "modal-open" : ""}`}>
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Manual Theme Installation</h3>
            <button
              className="btn btn-sm btn-circle btn-ghost"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={16} />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-2 font-mono">
                globals.css
              </h3>
              <p className="text-sm mb-2">
                Copy and paste the matsu theme to your project's{" "}
                <span className="font-bold font-mono">globals.css</span> file to
                install the theme with all variables and texture setup.
              </p>
              <div className="mockup-code border border-base-300 font-mono relative">
                <pre className="m-0 p-0">
                  <code ref={globalCssCodeRef} className="language-css">
                    {globalCssCode}
                  </code>
                </pre>
                <button
                  className={`btn btn-sm absolute top-2 right-2 p-2 ${
                    copyStatus["globals"]
                      ? "bg-success text-white"
                      : "hover:bg-base-200"
                  } rounded-md transition-colors flex items-center gap-1`}
                  onClick={() => copyToClipboard(globalCssCode, "globals")}
                  title="Copy to clipboard"
                >
                  {copyStatus["globals"] ? (
                    <>
                      <Check size={16} />
                      <span className="text-xs">Copied!</span>
                    </>
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2 font-mono">
                index.html
              </h3>
              <p className="text-sm mb-2">
                Alternatively, you can simply add the{" "}
                <span className="font-bold font-mono">data-theme="matsu"</span>{" "}
                attribute to your HTML element like:{" "}
              </p>

              <div className="mockup-code border border-base-300 font-mono relative mb-4">
                <pre className="m-0 p-4">
                  <code className="language-html">
                    &lt;html data-theme="matsu"&gt; &lt;!-- Your content here
                    --&gt; &lt;/html&gt;
                  </code>
                </pre>
                <button
                  className={`btn btn-sm absolute top-2 right-2 p-2 ${
                    copyStatus["data-theme"]
                      ? "bg-success text-white"
                      : "hover:bg-base-200"
                  } rounded-md transition-colors flex items-center gap-1`}
                  onClick={() =>
                    copyToClipboard(
                      '<html data-theme="matsu">\n  <!-- Your content here -->\n</html>',
                      "data-theme"
                    )
                  }
                  title="Copy to clipboard"
                >
                  {copyStatus["data-theme"] ? (
                    <>
                      <Check size={16} />
                      <span className="text-xs">Copied!</span>
                    </>
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
              <h3 className="text-sm font-semibold mb-2 font-mono">
                layout.tsx
              </h3>
              <p className="text-sm mb-2">
                Create a custom layout component in your project and wrap your
                pages with it to use the theme.
              </p>
              <div className="mockup-code border border-base-300 font-mono relative">
                <pre className="m-0 p-0">
                  <code ref={layoutCodeRef} className="language-typescript">
                    {layoutTsxCode}
                  </code>
                </pre>
                <button
                  className={`btn btn-sm absolute top-2 right-2 p-2 ${
                    copyStatus["layout"]
                      ? "bg-success text-white"
                      : "hover:bg-base-200"
                  } rounded-md transition-colors flex items-center gap-1`}
                  onClick={() => copyToClipboard(layoutTsxCode, "layout")}
                  title="Copy to clipboard"
                >
                  {copyStatus["layout"] ? (
                    <>
                      <Check size={16} />
                      <span className="text-xs">Copied!</span>
                    </>
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </div>

            {cssCode && (
              <div>
                <h3 className="text-sm font-semibold mb-2">CSS</h3>
                <div className="mockup-code border border-base-300 font-mono relative">
                  <pre className="m-0 p-0">
                    <code ref={cssCodeRef} className="language-css">
                      {cssCode}
                    </code>
                  </pre>
                  <button
                    className={`btn btn-sm absolute top-2 right-2 p-2 ${
                      copyStatus["css"]
                        ? "bg-success text-white"
                        : "hover:bg-base-200"
                    } rounded-md transition-colors flex items-center gap-1`}
                    onClick={() => cssCode && copyToClipboard(cssCode, "css")}
                    title="Copy to clipboard"
                  >
                    {copyStatus["css"] ? (
                      <>
                        <Check size={16} />
                        <span className="text-xs">Copied!</span>
                      </>
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>
            )}

            {jsCode && (
              <div>
                <h3 className="text-sm font-semibold mb-2">JavaScript</h3>
                <div className="mockup-code border border-base-300 font-mono relative">
                  <pre className="m-0 p-0">
                    <code ref={jsCodeRef} className="language-javascript">
                      {jsCode}
                    </code>
                  </pre>
                  <button
                    className={`btn btn-sm absolute top-2 right-2 p-2 ${
                      copyStatus["js"]
                        ? "bg-success text-white"
                        : "hover:bg-base-200"
                    } rounded-md transition-colors flex items-center gap-1`}
                    onClick={() => jsCode && copyToClipboard(jsCode, "js")}
                    title="Copy to clipboard"
                  >
                    {copyStatus["js"] ? (
                      <>
                        <Check size={16} />
                        <span className="text-xs">Copied!</span>
                      </>
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="modal-action">
            <button className="btn" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
        <div
          className="modal-backdrop bg-black/50"
          onClick={() => setIsModalOpen(false)}
        />
      </dialog>
    </div>
  );
};

export default InstallTheme;
