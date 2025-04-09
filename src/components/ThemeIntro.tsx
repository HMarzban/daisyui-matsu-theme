import { memo } from "react";

function ThemeIntroComponent() {
  return (
    <>
      <div className="mb-8 flex flex-col sm:flex-row items-center gap-4">
        <div className="w-24 h-24 mx-auto mb-4 sm:mb-0 rounded-full overflow-hidden border-4">
          <img
            src="./assets/Hossein.png"
            alt="Avatar"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold">Matsu-theme</h1>
      </div>
      <div className="text-center">
        <p className="text-xl mb-8 flex flex-wrap items-center justify-center gap-2">
          Ghibli Studio inspired theme for
          <a
            href="https://daisyui.com/"
            className="inline-flex items-center mx-1"
          >
            <img
              src="./assets/daisyui-logotype.svg"
              alt="daisyUI"
              width={110}
              height={28}
              className="inline-block"
            />
          </a>
          made by
          <a
            href="https://x.com/mhossein_"
            className="underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            M.Hossein
          </a>
        </p>

        <p className="max-w-2xl mx-auto mb-16">
          This theme is designed to be a modern and clean theme that is easy to
          use and customize. It is inspired by the Ghibli Studio movies and
          features a unique and beautiful color palette and watercolor paper
          texture.
        </p>
      </div>
    </>
  );
}

// Memoize the component to prevent unnecessary re-renders
const ThemeIntro = memo(ThemeIntroComponent);
export default ThemeIntro;
