import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { counterReducer, initialCounterState } from "./reducer";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = createStore(counterReducer, initialCounterState);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
