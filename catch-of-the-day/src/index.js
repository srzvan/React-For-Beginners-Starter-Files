import React from "react";
import { render } from "react-dom";

import App from "./components/App";

import "./css/style.css";

const mountPoint = document.getElementById("main");
render(<App />, mountPoint);
