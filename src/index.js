import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import usersReducer from "./features/users/usersSlice";
import {Provider} from "react-redux";
import {createStore} from "redux"
// add imports and code

const store = createStore(usersReducer)

ReactDOM.render(
  // add imports and code
  <Provider store = {store}>
    <App />
  </Provider>,
  // add imports and code
  document.getElementById("root")
);
