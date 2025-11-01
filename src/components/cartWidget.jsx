// function CardWidget() {
//   return (
//     <span>
//       <img
//         src="https://static.vecteezy.com/system/resources/previews/015/018/215/non_2x/shopping-cart-icon-cartoon-style-vector.jpg"
//         alt="cart"
//         style={{ width: '30px', height: '30px' }}
//       />
//     </span>
//   );
// }

// export default CardWidget;

import { useContext } from 'react';
import { CartContext } from './cartContext';
import { Link } from 'react-router';
import '../styles/cartWidget.css';

function CartWidget() {
  const { getTotalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      {getTotalQuantity() > 0 && (
        <span className="cart-quantity">{getTotalQuantity()}</span>
      )}
    </Link>
  );
}

export default CartWidget;
