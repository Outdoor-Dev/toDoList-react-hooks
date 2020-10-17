//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import ToDo from "ToDo";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { ToDo } from "./ToDo.js";

//render your react application
ReactDOM.render(<ToDo />, document.querySelector("#app"));
