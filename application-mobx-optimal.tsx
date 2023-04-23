import React from "react";
// import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import { App } from "./AppMobxOptimal";

const documentRoot = document.getElementById("react");
// render(<App />, documentRoot);
createRoot(documentRoot).render(<App />);
