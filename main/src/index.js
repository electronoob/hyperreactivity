import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './store'
import { Provider } from 'react-redux'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Info from "./routes/info"
import Tracker from "./routes/tracker"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Info />} />
            <Route path="info" element={<Info />} />
            <Route path="tracker" element={<Tracker />} />
            <Route
              path="*"
              element={
                <h1>404 baby</h1>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
