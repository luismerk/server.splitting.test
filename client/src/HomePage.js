import React from 'react';
import { Link } from "react-router-dom";

import logo from './logo.svg';

const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/cart">Go to cart</Link>
        <p>
          Welcome to my Homepage!
        </p>
      </header>
    </div>
  )
}
export default HomePage;
