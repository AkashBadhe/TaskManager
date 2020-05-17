import React from "react";
import ReactDOM from "react-dom";
import App from "./AppContainer";
import "./index.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/reducers";

let composeEnhancers = compose;

if (process.env.NODE_ENV === "development") {
  const composeWithDevToolsExtension =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  if (typeof composeWithDevToolsExtension === "function") {
    composeEnhancers = composeWithDevToolsExtension;
  }
}

const preloadedState = window.PRELOADED_STATE;

delete window.PRELOADED_STATE;

const store = createStore(
  combineReducers(reducers),
  preloadedState,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
