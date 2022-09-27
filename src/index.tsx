import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reportWebVitals from "./reportWebVitals";
import counterSlice from "./ducks/counterSlice";
import App from "./App";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store = configureStore({ reducer: counterSlice.reducer });

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
