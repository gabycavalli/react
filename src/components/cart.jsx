import { useContext, useState } from 'react';
import { CartContext } from './cartContext';
import { Link, useNavigate } from 'react-router';
import { createOrder } from '../data/FirestoreService';

function Cart() {
  const { cart, removeItem, clear, getTotalPrice } = useContext(CartContext);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <p>No hay items en el carrito</p>
        <Link to="/">Volver a la tienda</Link>
      </div>
    );
  }

  async function handleCheckout() {
    setIsProcessing(true);
    try {
      const order = {
        buyer: {
          name: 'Juan Perez',
          phone: '123456789',
          email: 'iNv0i@example.com',
        },
        items: cart.map((p) => ({
          id: p.id,
          title: p.title,
          price: p.price,
          quantity: p.quantity,
        })),
        total: getTotalPrice(),
        date: new Date(),
      };

      const orderId = await createOrder(order);
      clear();
      alert('Orden creada. ID: ' + orderId);
      navigate('/');
    } catch (error) {
      console.error('Error creando la orden:', error);
      alert('Error al procesar la orden. Revisar consola.');
    } finally {
      setIsProcessing(false);
    }
  }

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.img || item.image} alt={item.title} />
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
        <button onClick={clear} disabled={isProcessing}>
          Vaciar carrito
        </button>
        <button onClick={handleCheckout} disabled={isProcessing}>
          {isProcessing ? 'Procesando...' : 'Finalizar compra'}
        </button>
      </div>
    </div>
  );
}

export default Cart;
