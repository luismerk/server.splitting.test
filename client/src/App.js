import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './HomePage'
import Cart from './Cart'

class App extends Component {
  state = {
    message: ''
  }
  componentDidMount() {
    this.fetchMessage()
  }
  fetchMessage = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL)
      const { message } = await response.json()
      this.setState({ message })
    } catch (error) {
      // handle error
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage message={this.state.message} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
