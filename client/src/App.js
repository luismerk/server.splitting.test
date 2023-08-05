import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './HomePage';
import Cart from './Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
