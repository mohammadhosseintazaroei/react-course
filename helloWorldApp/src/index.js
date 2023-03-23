import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import walkCustomName, { talk } from "./ModulesInJs";

walkCustomName()
talk()
const element = <h1>hello world</h1>;

ReactDOM.render(<App />, document.getElementById("root"));
