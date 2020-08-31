import React from "react";
import { render } from "react-dom";

import StorePicker from "./components/StorePicker";

import "./css/style.css";

const mountPoint = document.getElementById("main");
render(<StorePicker />, mountPoint);
