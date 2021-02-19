import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import Run from './Run';
import store from "./reducers"



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Run />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);