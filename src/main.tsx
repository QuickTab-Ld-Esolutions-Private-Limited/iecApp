import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/** components */
import App from "./App.tsx";

/** styles */
import "./App.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
