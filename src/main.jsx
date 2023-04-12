import React from "react";
import ReactDOM from "react-dom/client";
import { ConfiguratorProvider } from "./contexts/Configurator";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfiguratorProvider>
      <App />
    </ConfiguratorProvider>
  </React.StrictMode>
);
