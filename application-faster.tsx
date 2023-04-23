import React from "react";
import { render } from "react-dom";
import { App } from "./AppFaster";

const documentRoot = document.getElementById("react");
render(<App />, documentRoot);
