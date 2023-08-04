import React from 'react';
import { Link } from "react-router-dom";

import logo from './logo.svg';

const HomePage = ({message}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Link to="/cart">Go to cart</Link>
          <h1>Hello World</h1>
          {message}
        </p>
        <p>Version: 5</p>
      </header>
    </div>
  )
}
export default HomePage;