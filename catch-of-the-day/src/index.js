import React from "react";
import { render } from "react-dom";

import Router from "./components/Router";

import "./css/style.css";

const mountPoint = document.getElementById("main");
render(<Router />, mountPoint);
