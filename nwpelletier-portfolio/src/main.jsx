import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ScreenSizeProvider } from "./contexts/ScreenSizeProvider.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScreenSizeProvider>
        <App />
      </ScreenSizeProvider>
    </BrowserRouter>
  </StrictMode>
);
