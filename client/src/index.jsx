import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApiProvider } from "./providers/api-provider";

ReactDOM.render(
  <ApiProvider>
    <App />
  </ApiProvider>,
  document.getElementById("root")
);
