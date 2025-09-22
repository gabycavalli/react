import { useState } from 'react';
import './App.css';
import Header from './components/header.jsx';
import ProductContainer from './components/productContainer.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h2>DCU Comics</h2> */}
      <Header />
      <ProductContainer />
    </>
  );
}

export default App;
