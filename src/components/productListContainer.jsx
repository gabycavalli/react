import React, { useState, useEffect } from 'react';
import Product from './product';
import '../styles/productContainer.css';
import { getData, getDataByCategory } from '../../src/mockApi/getData.js';
import { useParams } from 'react-router';

function ProductListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { catParam } = useParams();

  useEffect(() => {
    setLoading(true);
    if (catParam) {
      getDataByCategory(catParam).then((data) => {
        setProducts(data);
        setLoading(false);
      });
    } else {
      getData()
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error al obtener los datos:', error);
          setLoading(false);
        });
    }
  }, [catParam]);

  if (loading) {
    return <h2>Cargando productos...</h2>;
  }
  return (
    <section className="product-container">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
}

export default ProductListContainer;
