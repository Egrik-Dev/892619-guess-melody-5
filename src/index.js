import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const StartSettings = {
  ERRORS_CONUNT: 3
};

ReactDOM.render(
    <App
      errorsCount = {StartSettings.ERRORS_CONUNT}
    />,
    document.querySelector(`#root`)
);
