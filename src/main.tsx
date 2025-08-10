import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CalcProvider } from "./context/apiContext.tsx";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CalcProvider>
        <App />
      </CalcProvider>
    </BrowserRouter>
  </StrictMode>
);
