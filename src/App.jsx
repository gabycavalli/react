import { useState } from 'react';
import './App.css';
import Header from './components/header.jsx';
import ProductContainer from './components/productListContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import ProductDetailContainer from './components/productDetailContainer.jsx';
import { CartProvider } from './components/cartContext.jsx';
import Cart from './components/cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductContainer />} />
          <Route path="/category/:catParam" element={<ProductContainer />} />
          <Route path="/others" element={<h2>Otros Productos</h2>} />
          <Route path="/contacts" element={<h2>Contacto</h2>} />
          <Route path="/detail/:id" element={<ProductDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
