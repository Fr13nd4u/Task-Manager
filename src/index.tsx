// Core
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Routes
import { BrowserRouter } from "react-router-dom";

// Other
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
