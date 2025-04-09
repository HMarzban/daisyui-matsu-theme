import React from "react";
import {
  PieChart,
  Search,
  User,
  Key,
  Settings,
  TrendingUp,
  PenSquare,
  Database,
  Package,
  Mail,
  Key as AccessKey,
  UserIcon,
  Sliders,
  CheckCircle,
  CircleX,
  Inbox,
  X,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  Share2,
  Repeat,
  Headphones,
  ShieldCheck,
  ShieldAlert,
  Lock,
  ArrowUpRight,
  Phone,
  MessageSquare,
} from "lucide-react";

const DaisyUiComponentsPreview = () => {
  return (
    <div className="text-base-content mx-auto pb-20 columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-6 [&_.card]:bg-base-100 [&_.carbon-responsive-wrap]:flex-nowrap! [&_.carbon-responsive-wrap]:text-[11px]! [&_:is(div,button)]:[transition:background-color_0ms,border-color_100ms,box-shadow_300ms,border-radius_500ms_ease-out] [&>*]:mb-6 [&>*]:break-inside-avoid">
      {/* Card component */}
      <div className="card card-border border-base-300 card-sm">
        <div className="card-body gap-4">
          <h2 className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-semibold">
              <PieChart className="size-5 opacity-40" /> Preview
            </span>{" "}
            <span className="link text-xs">more</span>
          </h2>
          <div>
            <span className="badge badge-soft">
              Shoes <X className="size-3" />
            </span>{" "}
            <span className="badge badge-soft">
              Bags <X className="size-3" />
            </span>
          </div>
          <div className="flex flex-col">
            <div className="border-b-base-content/5 flex items-center justify-between gap-2 border-b border-dashed py-2">
              <label className="flex cursor-pointer items-center gap-2 select-none">
                <input type="checkbox" className="checkbox checkbox-sm" />{" "}
                <span>Hoodies</span>
              </label>{" "}
              <span className="badge badge-xs badge-neutral font-mono">25</span>
            </div>
            <div className="border-b-base-content/5 flex items-center justify-between gap-2 border-b border-dashed py-2">
              <label className="flex cursor-pointer items-center gap-2 select-none">
                <input type="checkbox" className="checkbox checkbox-sm" />{" "}
                <span>Bags</span>
              </label>{" "}
              <span className="badge badge-xs badge-neutral font-mono">3</span>
            </div>
            <div className="border-b-base-content/5 flex items-center justify-between gap-2 border-b border-dashed py-2">
              <label className="flex cursor-pointer items-center gap-2 select-none">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                  defaultChecked
                />{" "}
                <span>Shoes</span>
              </label>{" "}
              <span className="badge badge-xs badge-warning font-mono">0</span>
            </div>
            <div className="border-b-base-content/5 flex items-center justify-between gap-2 border-b border-dashed py-2">
              <label className="flex cursor-pointer items-center gap-2 select-none">
                <input type="checkbox" className="checkbox checkbox-sm" />{" "}
                <span>Accessories</span>
              </label>{" "}
              <span className="badge badge-xs badge-neutral font-mono">4</span>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar component */}
      <div className="card card-border border-base-300 card-sm overflow-hidden">
        <div className="card-body gap-4">
          <div className="border-b-base-300 grid grid-cols-7 border-b border-dashed pb-3">
            <div className="rounded-field flex flex-col items-center px-2 py-1">
              <span className="text-sm font-semibold">12</span>{" "}
              <span className="text-[10px] font-semibold opacity-50">M</span>
            </div>
            <div className="rounded-field flex flex-col items-center px-2 py-1">
              <span className="text-sm font-semibold">13</span>{" "}
              <span className="text-[10px] font-semibold opacity-50">T</span>
            </div>
            <div className="rounded-field bg-primary text-primary-content flex flex-col items-center px-2 py-1">
              <span className="text-sm font-semibold">14</span>{" "}
              <span className="text-[10px] font-semibold opacity-50">W</span>
            </div>
            <div className="rounded-field flex flex-col items-center px-2 py-1">
              <span className="text-sm font-semibold">15</span>{" "}
              <span className="text-[10px] font-semibold opacity-50">T</span>
            </div>
            <div className="rounded-field flex flex-col items-center px-2 py-1">
              <span className="text-sm font-semibold">16</span>{" "}
              <span className="text-[10px] font-semibold opacity-50">F</span>
            </div>
            <div className="rounded-field flex flex-col items-center px-2 py-1">
              <span className="text-sm font-semibold">17</span>{" "}
              <span className="text-[10px] font-semibold opacity-50">S</span>
            </div>
            <div className="rounded-field flex flex-col items-center px-2 py-1">
              <span className="text-sm font-semibold">18</span>{" "}
              <span className="text-[10px] font-semibold opacity-50">S</span>
            </div>
          </div>
          <div>
            <label className="input input-sm input-border flex w-auto items-center gap-2">
              <Search className="size-4" />{" "}
              <input
                type="text"
                placeholder="Search for events"
                autoComplete="off"
                name="search_custom"
                data-form-type="other"
              />
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                className="toggle toggle-sm toggle-primary"
              />{" "}
              <span className="text-xs">Show all day events</span>
            </label>
          </div>
        </div>
        <div className="bg-base-300">
          <div className="flex items-center gap-2 p-4">
            <div className="grow">
              <div className="text-sm font-medium">Team Sync Meeting</div>
              <div className="text-xs opacity-60">
                Weekly product review with design and development teams
              </div>
            </div>
            <div className="shrink-0">
              <span className="badge badge-sm badge-neutral">1h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs component */}
      <div role="tablist" className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 1"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 1
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 2"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 3"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 3
        </div>
      </div>

      {/* Price range component */}
      <div className="card card-border border-base-300 card-sm">
        <div className="card-body gap-4">
          <h2 className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-semibold">
              <Settings className="size-5 opacity-40" /> Price range
            </span>
          </h2>
          <div className="text-center text-5xl font-extralight">50</div>{" "}
          <input type="range" className="range range-sm" />
        </div>
      </div>

      {/* Product card */}
      <div className="card card-border border-base-300 card-sm">
        <figure className="p-2 rounded-md">
          <img
            className="rounded-[calc(var(--radius-box)-.5rem)] w-full h-auto"
            src="./assets/product.png"
            alt="Yellow Nike Shoes"
            loading="eager"
          />
        </figure>
        <div className="card-body gap-4">
          <h2 className="flex items-center justify-between">
            <span className="font-semibold">Nike Shoes</span>{" "}
            <span className="badge badge-success badge-sm">SALE</span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>{" "}
            <span className="text-xs opacity-60">420 reviews</span>
          </div>
          <div>
            <span className="text-2xl font-semibold">$120</span>{" "}
            <span className="text-sm line-through opacity-60">$150</span>
          </div>
        </div>
      </div>

      {/* Search component */}
      <div className="card card-border border-base-300 card-sm">
        <div className="card-body gap-4 ">
          <div className="join">
            <label className="join-item input-border input flex  items-center gap-2">
              <Search className="h-4 w-4 shrink-0 opacity-70" />{" "}
              <input
                type="text"
                className="grow"
                placeholder="Search"
                autoComplete="off"
                name="search_field_custom"
                data-form-type="other"
              />
            </label>{" "}
            <button className="join-item btn btn-neutral">Find</button>
          </div>
        </div>
      </div>

      {/* Registration form */}
      <div className="card card-border border-base-300 card-sm overflow-hidden">
        <div className="border-base-300 border-b border-dashed">
          <div className="flex items-center gap-2 p-4">
            <div className="grow">
              <div className="flex items-center gap-2 text-sm font-medium">
                <UserIcon className="size-5 opacity-40" /> Create new account
              </div>
            </div>
          </div>
        </div>
        <div className="card-body gap-4">
          <p className="text-xs opacity-60">
            Registration is free and only takes a minute
          </p>
          <div className="flex flex-col gap-1">
            <label className="input input-border flex w-full items-center gap-2">
              <User className="h-4 w-4 opacity-70" />{" "}
              <input
                type="text"
                className="grow"
                placeholder="Username"
                autoComplete="off"
                name="username_custom"
                data-form-type="other"
              />
            </label>
          </div>
          <div className="flex flex-col gap-1">
            <label className="input input-border flex w-full items-center gap-2">
              <Key className="h-4 w-4 opacity-70" />{" "}
              <input
                type="password"
                className="grow"
                placeholder="password"
                autoComplete="new-password"
                name="pwd_custom"
                data-form-type="other"
              />
            </label>{" "}
            <span className="text-base-content/60 flex items-center gap-2 px-1 text-[0.6875rem]">
              <span className="status status-error inline-block"></span>{" "}
              Password must be 8+ characters
            </span>
          </div>
          <label className="text-base-content/60 flex items-center gap-2 text-xs">
            <input type="checkbox" className="toggle toggle-xs" /> Accept terms
            without reading
          </label>{" "}
          <label className="text-base-content/60 flex items-center gap-2 text-xs">
            <input type="checkbox" className="toggle toggle-xs" /> Subscribe to
            spam emails
          </label>
          <div className="card-actions items-center gap-6">
            <button className="btn btn-primary">Register</button>{" "}
            <button className="link">Or login</button>
          </div>
        </div>
      </div>

      {/* Chart component */}
      <div className="card card-border border-base-300 card-sm">
        <div className="card-body gap-4">
          <div className="*:bg-base-content mt-4 flex h-24 items-end gap-2 *:w-full *:rounded-sm">
            <div style={{ height: "10%" }}></div>
            <div style={{ height: "20%" }}></div>
            <div style={{ height: "10%" }}></div>
            <div style={{ height: "25%" }}></div>
            <div style={{ height: "22%" }}></div>
            <div style={{ height: "15%" }}></div>
            <div style={{ height: "20%" }}></div>
            <div style={{ height: "35%" }}></div>
            <div style={{ height: "40%" }}></div>
            <div style={{ height: "45%" }}></div>
            <div style={{ height: "30%" }}></div>
            <div style={{ height: "35%" }}></div>
            <div style={{ height: "60%" }}></div>
            <div style={{ height: "65%" }}></div>
            <div style={{ height: "80%" }}></div>
            <div style={{ height: "90%" }}></div>
          </div>
          <p className="py-3 text-xs">
            Sales volume reached $12,450 this week, showing a 15% increase from
            the previous period.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button className="btn">Charts</button>
            <button className="btn btn-neutral">Details</button>
          </div>
        </div>
      </div>

      {/* Stats card */}
      <div className="card card-border border-base-300 w-full">
        <div className="stats bg-base-100 w-full overflow-hidden shadow-[0_.1rem_.5rem_-.3rem_#0003]">
          <div className="stat">
            <div className="stat-figure">
              <div
                className="radial-progress"
                style={
                  { "--value": 91, "--size": "3rem" } as React.CSSProperties
                }
                role="progressbar"
              >
                91
              </div>
            </div>
            <div className="stat-title">Page Score</div>
            <div className="stat-value">
              91<span className="text-sm">/100</span>
            </div>
            <div className="stat-desc flex items-center gap-1">
              <ShieldCheck className="text-success size-4" /> All good
            </div>
          </div>
        </div>
      </div>

      {/* Recent orders component */}
      <div className="card card-border border-base-300 card-sm">
        <div className="card-body gap-4">
          <h2 className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-semibold">
              <TrendingUp className="size-5 opacity-40" /> Recent orders
            </span>
          </h2>
          <div className="flex flex-col text-xs">
            <div className="border-t-base-content/5 flex items-center justify-between gap-2 border-t border-dashed py-2">
              Charlie Chapman{" "}
              <span className="badge badge-xs badge-info">Send</span>
            </div>
            <div className="border-t-base-content/5 flex items-center justify-between gap-2 border-t border-dashed py-2">
              Howard Hudson{" "}
              <span className="badge badge-xs badge-error">Failed</span>
            </div>
            <div className="border-t-base-content/5 flex items-center justify-between gap-2 border-t border-dashed py-2">
              Fiona Fisher{" "}
              <span className="badge badge-xs badge-warning">In progress</span>
            </div>
            <div className="border-t-base-content/5 flex items-center justify-between gap-2 border-t border-dashed py-2">
              Nick Nelson{" "}
              <span className="badge badge-xs badge-success">Completed</span>
            </div>
            <div className="border-t-base-content/5 flex items-center justify-between gap-2 border-t border-dashed py-2">
              Amanda Anderson{" "}
              <span className="badge badge-xs badge-success">Completed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue stats component */}
      <div className="card card-border border-base-300 w-full">
        <div className="stats">
          <div className="stat">
            <div className="stat-title">April Revenue</div>
            <div className="stat-value">$32,400</div>
            <div className="stat-desc flex items-center gap-2">
              <ArrowUpRight className="text-success size-4" /> 21% more than
              last month
            </div>
          </div>
        </div>
      </div>

      {/* Write post component */}
      <div className="card card-border border-base-300 card-sm overflow-hidden">
        <div className="border-base-300 border-b border-dashed">
          <div className="flex items-center gap-2 p-4">
            <div className="grow">
              <div className="flex items-center gap-2 text-sm font-medium">
                <PenSquare className="size-5 opacity-40" /> Write a new post
              </div>
            </div>
          </div>
        </div>
        <div className="card-body gap-4">
          <div className="flex items-center justify-between">
            <div className="join">
              <input
                className="join-item btn btn-xs px-3 font-bold"
                type="checkbox"
                name="options"
                aria-label="B"
              />
              <input
                className="join-item btn btn-xs px-3 font-mono italic"
                type="checkbox"
                name="options"
                aria-label="I"
              />
              <input
                className="join-item btn btn-xs px-3 underline"
                type="checkbox"
                name="options"
                aria-label="U"
              />
            </div>
            <button className="btn btn-xs">Add files</button>
          </div>
          <textarea
            className="textarea textarea-border w-full resize-none"
            placeholder="What's happening?"
            autoComplete="off"
          ></textarea>
          <p className="px-2 text-xs opacity-40">1200 characters remaining</p>
          <div className="card-actions grid grid-cols-2">
            <button className="btn">Draft</button>
            <button className="btn btn-primary">Publish</button>
          </div>
        </div>
      </div>

      {/* Chat component */}
      <div className="card card-border border-base-300 card-sm overflow-hidden">
        <div className="card-body">
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-8 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="./assets/Avatar-1.png"
                  width={32}
                  height={32}
                />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble chat-bubble-neutral">
              You were the Chosen One!
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-8 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="./assets/Avatar-1.png"
                  width={32}
                  height={32}
                />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble chat-bubble-neutral">
              You were the Chosen One!
            </div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-8 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="./assets/Avatar-2.png"
                  width={32}
                  height={32}
                />
              </div>
            </div>
            <div className="chat-header">
              Anakin <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble chat-bubble-neutral">I hate you!</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
        </div>
        <div className="dock dock-sm bg-base-300 relative px-2">
          <button>
            <Phone className="size-5" />
          </button>{" "}
          <button className="dock-active">
            <MessageSquare className="size-5" />
          </button>{" "}
          <button>
            <Settings className="size-5" />
          </button>
        </div>
      </div>

      {/* Menu component */}
      <div className="card card-border border-base-300">
        <ul className="menu w-full">
          <li className="menu-title font-bold text-left">Admin panel</li>
          <li>
            <span>
              <Database className="size-5 opacity-30" /> Databases{" "}
              <span className="badge justify-self-end">7</span>
            </span>
          </li>
          <li>
            <span>
              <Package className="size-5 opacity-30" /> Products
            </span>
          </li>
          <li>
            <span>
              <Mail className="size-5 opacity-30" /> Messages{" "}
              <span className="badge justify-self-end">29</span>
            </span>
          </li>
          <li>
            <span>
              <AccessKey className="size-5 opacity-30" /> Access tokens
            </span>
          </li>
          <li>
            <span>
              <User className="size-5 opacity-30" /> Users{" "}
              <span className="status status-info"></span>
            </span>
          </li>
          <li>
            <span>
              <Sliders className="size-5 opacity-30" /> Settings
            </span>
          </li>
        </ul>
      </div>

      {/* Timeline component */}
      <div className="card card-border border-base-300 card-sm overflow-hidden">
        <div className="card-body my-2">
          <div className="flex items-center justify-around">
            <button className="btn btn-square btn-neutral">
              <SkipBack className="size-4 shrink-0" />
            </button>{" "}
            <button className="btn btn-square btn-neutral btn-lg">
              <Play className="size-6 shrink-0" />
            </button>{" "}
            <button className="btn btn-square btn-neutral">
              <SkipForward className="size-4 shrink-0" />
            </button>
          </div>
          <div className="mt-2 text-center">
            <h6 className="text-sm font-bold">PM Zoomcall ASMR</h6>
            <p className="text-xs opacity-50">
              Project Manager talking for 2 hours
            </p>
          </div>
        </div>
        <div className="border-base-300 flex flex-col border-t px-6 py-4">
          <div className="relative mt-6">
            <div
              className="tooltip tooltip-open absolute top-2 before:text-xs"
              style={{ insetInlineStart: "10%" }}
              data-tip="13:39"
            ></div>{" "}
            <progress className="progress" value="10" max="100"></progress>
          </div>
          <div className="flex justify-between text-xs opacity-50">
            <span>13:39</span> <span>120:00</span>
          </div>
        </div>
        <div className="flex items-center justify-around px-2 pb-6">
          <button className="btn btn-square">
            <Volume2 className="size-4" />
          </button>{" "}
          <button className="btn btn-square">
            <Repeat className="size-4" />
          </button>{" "}
          <button className="btn btn-square">
            <Share2 className="size-4" />
          </button>{" "}
          <button className="btn btn-square">
            <Headphones className="size-4" />
          </button>
        </div>
      </div>

      {/* Code component */}
      <div className="card card-border border-base-300 w-full">
        <div className="mockup-code">
          <pre className="text-sm" data-prefix="$">
            <code>npm i daisyui</code>
          </pre>
          <pre className="text-sm" data-prefix="&gt;">
            <code>installing...</code>
          </pre>
          <pre className="text-sm" data-prefix="&gt;">
            <code>Done!</code>
          </pre>
        </div>
      </div>

      {/* Alerts component */}
      <div className="flex flex-col gap-4">
        <div className="alert max-sm:alert-vertical alert-info text-xs font-bold">
          <Inbox className="size-6" /> There are 9 new messages
        </div>
        <div className="alert alert-outline max-sm:alert-vertical alert-success text-xs font-bold">
          <CheckCircle className="size-6" /> Verification process completed
        </div>
        <div className="alert alert-dash max-sm:alert-vertical alert-warning text-xs font-bold">
          <ShieldAlert className="size-6" />{" "}
          <span>
            <span className="link">Click</span> to verify your email
          </span>
        </div>
        <div className="alert alert-soft max-sm:alert-vertical alert-error text-xs font-bold">
          <Lock className="size-6" /> Access denied{" "}
          <button className="btn btn-xs btn-ghost">Support</button>
        </div>
      </div>

      {/* Timeline component */}
      <ul className="timeline timeline-vertical timeline-compact">
        <li>
          <div className="timeline-middle">
            <CheckCircle className="text-primary h-5 w-5" />
          </div>
          <div className="timeline-end timeline-box">
            Harry Potter and Sorcerer&apos;s Stack
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <CheckCircle className="text-primary h-5 w-5" />
          </div>
          <div className="timeline-end timeline-box">
            Harry Potter and Chamber of Servers
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <CheckCircle className="text-primary h-5 w-5" />
          </div>
          <div className="timeline-end timeline-box">
            Harry Potter and Prisoner of Azure
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <CheckCircle className="text-primary h-5 w-5" />
          </div>
          <div className="timeline-end timeline-box">
            Harry Potter and Goblet of Firebase
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <CheckCircle className="h-5 w-5" />
          </div>
          <div className="timeline-end timeline-box">
            Harry Potter and Elixir of Phoenix
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <CheckCircle className="h-5 w-5" />
          </div>
          <div className="timeline-end timeline-box">
            Harry Potter and Half-Deployed App
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <CheckCircle className="h-5 w-5" />
          </div>
          <div className="timeline-end timeline-box">
            Harry Potter and Deathly Frameworks
          </div>
        </li>
      </ul>

      {/* Pricing component */}
      <div className="card card-border border-base-300 from-base-content/5 bg-linear-to-bl to-50%">
        <div className="flex justify-center">
          <div className="tabs tabs-box bg-base-300 m-4 inline-flex flex-nowrap">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab w-1/2"
              aria-label="Monthly"
            />
            <div className="indicator w-1/2">
              <div className="indicator-item badge badge-warning badge-xs">
                SALE
              </div>{" "}
              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab w-full"
                aria-label="Yearly"
              />
            </div>
          </div>
        </div>
        <div className="card-body gap-4">
          <div className="flex flex-col">
            <h4 className="font-bold tracking-wide opacity-50">Starter Plan</h4>
            <div>
              <span className="text-4xl font-black">$200</span>
              <span className="opacity-50">/month</span>
            </div>
          </div>
          <div className="my-2 flex flex-col text-xs">
            <div className="border-b-accent/5 flex items-center gap-2 border-b pb-2">
              <CheckCircle className="text-success size-4" /> 20 Tokens per day
            </div>
            <div className="border-b-accent/5 flex items-center gap-2 border-b pb-2">
              <CheckCircle className="text-success size-4" /> 10 Projects
            </div>
            <div className="border-b-accent/5 flex items-center gap-2 border-b pb-2">
              <CheckCircle className="text-success size-4" /> API Access
            </div>
            <div className="flex items-center gap-2">
              <CircleX className="text-error size-4" /> Priority Support
            </div>
          </div>{" "}
          <button className="btn btn-accent">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default DaisyUiComponentsPreview;
