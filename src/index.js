import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ThemeProvider } from "@material-ui/core/styles";

import createRootReducer from "./reducers";
import theme from "./theme";
import App from "./App";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducer(),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
