import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.tsx";
import Hero from "./modules/Hero/index.tsx";
import Main from "./components/Main/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Hero />
    <Main />
  </StrictMode>
);
