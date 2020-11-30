import './index.scss';
import { Configuration } from 'react-md'
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import allReducers from "./Store/Reducers/index";
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Configuration>
      < App />
    </Configuration>
  </Provider>
  ,
 document.getElementById("root")
);

serviceWorker.unregister();
