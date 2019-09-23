import ReactDOM, { hydrate } from "react-dom";
import React from "react";
import { Provider } from "mobx-react";
import App from "./App";
import createStore from "./createStore";

const store = createStore();
console.log(store);
ReactDOM.render(
  <Provider TodoStore={store.TodoStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
