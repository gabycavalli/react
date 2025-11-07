import { useContext } from 'react';
import { CartContext } from './cartContext';
import { Link } from 'react-router';
import '../styles/cartWidget.css';

function CartWidget() {
  const { getTotalQuantity } = useContext(CartContext);
  const qty = getTotalQuantity();

  return (
    <Link to="/cart" className="cart-widget" aria-label="Ver carrito">
      <img
        src="https://static.vecteezy.com/system/resources/previews/015/018/215/non_2x/shopping-cart-icon-cartoon-style-vector.jpg"
        alt="carrito"
        className="cart-icon"
      />
      {qty > 0 && <span className="cart-quantity">{qty}</span>}
    </Link>
  );
}

export default CartWidget;
