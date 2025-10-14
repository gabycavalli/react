import { useState } from 'react';
import './App.css';
import Header from './components/header.jsx';
import ProductContainer from './components/productListContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import ProductDetailContainer from './components/productDetailContainer.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductContainer />} />
        <Route path="/category/:catParam" element={<ProductContainer />} />
        <Route path="/others" element={<h2>Otros Productos</h2>} />
        <Route path="/contacts" element={<h2>Contacto</h2>} />
        <Route path="/detail/:id" element={<ProductDetailContainer />} />
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
