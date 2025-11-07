import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { CartContext } from './cartContext';
//import { dcProducts } from '../data/dcProd';
import { getProductById } from '../data/FirestoreService';

function ProductDetailContainer() {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id)
      .then((productData) => {
        setProduct(productData);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      alert('Producto agregado al carrito');
    }
  };

  if (!product) {
    return <div>Cargando Producto...</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.img} alt={product.title} />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>

        <div className="quantity-selector">
          <button
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>

        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

export default ProductDetailContainer;
