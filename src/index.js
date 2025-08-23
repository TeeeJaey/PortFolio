import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Main from "./components/Main";
import { HashRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <HashRouter>
            <Main />
        </HashRouter>
    </StrictMode>,
);
