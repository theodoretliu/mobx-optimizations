import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./AppNaive";

const documentRoot = document.getElementById("react");
createRoot(documentRoot).render(<App />);
