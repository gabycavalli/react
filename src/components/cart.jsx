import React, { useContext } from 'react';
import CartContext from '../components/CartContext';

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>Cantidad: {item.quantity}</p>
        </div>
      ))}
      <p>Total: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
    </div>
  );
}

export default Cart;