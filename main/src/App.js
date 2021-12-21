import './App.css';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, decrementByAmount } from './rowJam';

import { Outlet, Link } from "react-router-dom";


function App() {
  return (
    <div>
      <nav>
        <Link to="/info">Info</Link> |{" "}
        <Link to="/tracker">Tracker</Link>
      </nav>
      <Outlet />
    </div>
  );
}


export default App;