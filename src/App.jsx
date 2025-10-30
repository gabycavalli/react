import { useState } from 'react';
import './App.css';
import Header from './components/header.jsx';
import ProductContainer from './components/productContainer.jsx';
import CartProvider from './components/cartContext.jsx';
import CardWidget from './components/cardWidget.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h2>DCU Comics</h2> */}
      <Header />
      <CartProvider>
        <ProductContainer />
      </CartProvider>
      <CartProvider>
        <CardWidget />
      </CartProvider>
    </>
  );
}

export default App;
