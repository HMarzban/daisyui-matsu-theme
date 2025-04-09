import { FaHeart, FaGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-6 border-t-2 border-base-300">
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <span className="font-semibold">Matsu-theme</span>
            <span className="mx-2 hidden sm:inline">•</span>
            <span className="text-sm opacity-75 block sm:inline">
              A Ghibli Studio inspired theme
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm opacity-75">
            <span>Special thanks to </span>
            <a
              href="https://matsu-theme.vercel.app/"
              className="link link-hover font-medium underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Matt Wierzbicki
            </a>
            <FaHeart className="text-red-500 inline size-3" />
          </div>
        </div>
        {/* Feedback message */}
        <div className="text-left text-xs mt-4">
          <p className="flex flex-wrap items-center gap-2">
            I'd love to hear your thoughts! Come say hi - let's chat and feel
            free to share this project!
            <span className="flex gap-2 mt-1 sm:mt-0">
              <a
                href="https://github.com/HMarzban/daisyui-matsu-theme"
                className="link link-hover font-medium underline inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-1" /> GitHub
              </a>
              <span className="mx-1">•</span>
              <a
                href="https://x.com/mhossein_"
                className="link link-hover font-medium underline inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="mr-1" /> X.com
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
