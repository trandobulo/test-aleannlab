import React from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./components/App/App";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
