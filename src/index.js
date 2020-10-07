import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import questions from './mocks/questions';

const {StartSettings, ARRAY_MOCKS: gamesQuestions} = questions;
const {ERRORS_COUNT: errorsCount} = StartSettings;

ReactDOM.render(
    <App
      errorsCount={errorsCount}
      questions={gamesQuestions}
    />,
    document.querySelector(`#root`)
);
