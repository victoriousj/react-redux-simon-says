import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Container from "./Container";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers/control";

import "./App.css";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,

  document.getElementById("root")
);
