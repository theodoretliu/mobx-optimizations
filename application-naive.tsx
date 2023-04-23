import React from "react";
import { render } from "react-dom";
import { App } from "./AppNaive";

const documentRoot = document.getElementById("react");
render(<App />, documentRoot);
