import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeContextProvider } from "@context/Theme";
const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);
root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
