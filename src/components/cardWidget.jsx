import React, { useContext } from 'react';
import CartContext from './cartContext.jsx';


function CardWidget() {
  const { cartItems } = useContext(CartContext);
  return (
    <span>
      <img
        src="https://static.vecteezy.com/system/resources/previews/015/018/215/non_2x/shopping-cart-icon-cartoon-style-vector.jpg"
        alt="cart"
        style={{ width: '30px', height: '30px' }}
      />
      {cartItems.length}
    </span>
  );
}

export default CardWidget;
