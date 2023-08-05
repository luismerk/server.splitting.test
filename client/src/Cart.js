import React from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg';

function Cart() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Link className="" to="/">Go back</Link>
          <h1>Cart</h1>
        </p>
      </header>
    </div>
  );
}
export default Cart;
