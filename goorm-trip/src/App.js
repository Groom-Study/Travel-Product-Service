import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Cart from './pages/Cart'; 

function App() {
  return (
    <CartProvider>
      <Router>
        {/* 상단 내비게이션 바 */}
        <nav style={{ padding: '1rem', textAlign: 'center', background: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
          <Link to="/" style={{ marginRight: '20px', textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>HOME</Link>
          <Link to="/cart" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>장바구니</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;