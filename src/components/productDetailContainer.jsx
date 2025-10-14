import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getDataById } from '../mockApi/getData';
import { PacmanLoader } from 'react-spinners';

function ProductDetailContainer(props) {
  const [itemData, setItemData] = useState({ loading: true });
  const { id } = useParams();
  useEffect(() => {
    getDataById(id).then((res) => setItemData(res));
  }, [id]);

  return itemData.loading ? (
    <PacmanLoader color={'#d7cc36ff'} size={50} data-testid="loader" />
  ) : (
    <div className="product">
      <h4 className="product-title">{itemData.title}</h4>
      <img src={itemData.img} alt="" />
      <p>Precio: {itemData.price} $</p>
      <p>Descripción: {itemData.description}</p>
    </div>
  );
}

export default ProductDetailContainer;
