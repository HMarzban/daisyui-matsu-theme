import { RxDashboard } from "react-icons/rx";
import { RxPieChart } from "react-icons/rx";
import { RxHeart } from "react-icons/rx";
import { RxChatBubble } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
import { RxCodesandboxLogo } from "react-icons/rx";
import { RxHome } from "react-icons/rx";

const DaisyUiIntro = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex flex-col md:flex-row bg-base-300 items-stretch justify-center gap-4 md:gap-6 rounded-2xl p-4 md:p-6 ${className}`}
    >
      <div className="flex flex-col gap-4 md:gap-6 w-full md:w-[30%]">
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
          <div className="rounded-box bg-base-200 h-full w-full sm:w-[20%]">
            <ul className="menu w-full">
              <li className="menu-title">
                <RxDashboard size={20} />
              </li>
              <li>
                <button className="active" aria-label="chart button">
                  <RxPieChart size={20} />
                </button>
              </li>
              <li>
                <button aria-label="heart button">
                  <RxHeart size={20} />
                </button>
              </li>
              <li>
                <button aria-label="comments button">
                  <RxChatBubble size={20} />
                </button>
              </li>
              <li>
                <button aria-label="user button">
                  <RxAvatar size={20} />
                </button>
              </li>
              <li>
                <button aria-label="cube button">
                  <RxCodesandboxLogo size={20} />
                </button>
              </li>
            </ul>
          </div>
          <div className="rounded-box bg-base-200 h-full w-full sm:w-[80%]">
            <ul className="menu w-full">
              <li className="menu-title text-left font-bold">Admin panel</li>
              <li>
                <button className="active">
                  <RxDashboard size={20} /> Dashboard
                </button>
              </li>
              <li>
                <button aria-label="notifications button">
                  <RxHeart size={20} /> Notifications
                </button>
              </li>
              <li>
                <button aria-label="messages button">
                  <RxChatBubble size={20} /> Messages
                </button>
              </li>
              <li>
                <button aria-label="people button">
                  <RxAvatar size={20} /> People
                </button>
              </li>
              <li>
                <button aria-label="products button">
                  <RxCodesandboxLogo size={20} /> Products{" "}
                  <span className="badge badge-info">50</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-box bg-base-200 grid grow grid-cols-2 gap-4 p-6">
          <button className="btn btn-neutral">Neutral</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-info">Info</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-error">Error</button>
        </div>
      </div>
      <div className="flex grow flex-col gap-4 md:gap-6 w-full md:w-[40%]">
        <div className="navbar bg-base-200 rounded-box hidden md:flex">
          <div className="grow">
            <button className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  width={40}
                  height={40}
                  src="./assets/Avatart-0.png"
                  alt="Avatar"
                />
              </div>
            </button>
          </div>
          <ul className="menu menu-sm menu-horizontal rounded-box">
            <li>
              <button>
                <RxHome className="h-5 w-5" />
                Inbox <span className="badge badge-sm">99+</span>
              </button>
            </li>
            <li>
              <button>
                Updates{" "}
                <span className="badge badge-sm badge-warning">NEW</span>
              </button>
            </li>
            <li>
              <button>
                Stats <span className="badge badge-xs badge-info"></span>
              </button>
            </li>
          </ul>
        </div>
        <div className="rounded-box flex grow flex-col px-4 md:px-6 pt-8 md:pt-12 pb-6 md:pb-8 text-center">
          <div className="font-title text-[clamp(1.5rem,6vw,3rem)] leading-none font-black">
            Unlimited themes
          </div>
          <p className="font-title font-light text-xl md:text-3xl lg:text-4xl">
            with zero effort
          </p>
          <div className="h-4"></div>
          <p className="text-base-content/80 mx-auto max-w-lg font-sans text-sm font-light">
            daisyUI adds a set of customizable color names to Tailwind CSS and
            these new colors use CSS variables for the values. Using daisyUI
            color names, you get Dark Mode and even more themes without adding a
            new class name.
          </p>
          <div className="h-4"></div>
          <div>
            <a
              className="btn btn-wide btn-primary"
              target="_blank"
              href="https://daisyui.com/theme-generator/"
              rel="noopener noreferrer"
            >
              See all themes
            </a>
          </div>
        </div>
        <div className="card bg-base-200 hidden md:flex">
          <div className="card-body">
            <div className="flex flex-wrap h-full items-center justify-between gap-4 md:gap-2">
              <input
                type="checkbox"
                name="sample-checkbox"
                className="toggle"
                defaultChecked
              />
              <input
                type="checkbox"
                name="sample-checkbox"
                className="toggle toggle-primary"
                defaultChecked
              />
              <input
                type="checkbox"
                name="sample-checkbox"
                className="toggle toggle-secondary"
                defaultChecked
              />
              <input
                type="checkbox"
                name="sample-checkbox"
                className="toggle toggle-accent"
                defaultChecked
              />
              <input
                type="checkbox"
                name="sample-checkbox"
                className="checkbox"
                defaultChecked
              />
              <input
                type="checkbox"
                name="sample-checkbox"
                className="checkbox checkbox-primary"
                defaultChecked
              />
              <input
                type="checkbox"
                name="sample-checkbox"
                className="checkbox checkbox-secondary"
                defaultChecked
              />
              <input
                type="checkbox"
                name="sample-checkbox"
                className="checkbox checkbox-accent"
                defaultChecked
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-box bg-base-200 card flex h-full w-full md:w-[30%]">
        <div className="card-body flex-1">
          <div className="card-title mb-4 text-sm">Semantic colors</div>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col items-center gap-1">
              <div className="bg-primary rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                primary
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-secondary rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                secondary
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-accent rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                accent
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-neutral rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                neutral
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-primary-content rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                primary content
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-secondary-content rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                secondary content
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-accent-content rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                accent content
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-neutral-content rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                neutral content
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-base-100 rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                base 100
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-base-200 rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                base 200
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-base-300 rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                base 300
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-base-content rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                base content
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-info rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                info
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-success rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                success
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-warning rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                warning
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-error rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                error
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-info-content rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                info content
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-success-content rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                success content
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-warning-content rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                warning content
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-error-content rounded-field aspect-square w-10 shadow-xs"></div>
              <div className="text-base-content/60 text-center text-[.6rem]">
                error content
              </div>
            </div>
          </div>
          <div className="mt-6">
            <a className="btn btn-block" href="/docs/colors/">
              Learn more about colors
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaisyUiIntro;
