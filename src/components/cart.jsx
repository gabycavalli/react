import { useContext } from 'react';
import { CartContext } from './cartContext';
import { Link } from 'react-router';

function Cart() {
  const { cart, removeItem, clear, getTotalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <p>No hay items en el carrito</p>
        <Link to="/">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div className="item-details">
            <h3>{item.title}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.price}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
          </div>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}
      <div className="cart-summary">
        <h3>Total: ${getTotalPrice()}</h3>
        <button onClick={clear}>Vaciar carrito</button>
        <Link to="/checkout">Finalizar compra</Link>
      </div>
    </div>
  );
}

export default Cart;
