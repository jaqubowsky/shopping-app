import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle, Theme } from "./styles/index";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
  </React.StrictMode>
);
