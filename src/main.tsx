import React from "react";
import { createRoot } from "react-dom/client";
import WebFont from "webfontloader";

import App from "./App";
import "./styles/globals.css";

// Load fonts
WebFont.load({
  google: {
    families: ["PT Serif:400,700", "Nunito:400,500,700"],
  },
});

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
