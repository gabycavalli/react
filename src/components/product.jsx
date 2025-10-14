import '../styles/product.css';
import { Link } from 'react-router';
import { Link } from 'react-router-dom';
function Product(props) {
  return (
    <div className="product">
      <img src={props.img} alt="" />
      <h4 className="product-title">{props.title}</h4>
      <p className="product-description">
        With the Justice League on hiatus following the events of Dark Crisis on
        Infinite Earths, DC revealed that the Titans will be stepping into the
        team's shoes during the Dawn of DC event.
      </p>
      {/*<p className="product-price">{props.price}</p>*/}
      {/*<button className="cart-button">Add to cart</button>*/}
      <Link to={`/detail/${props.id}`}>
        <button className="details-button">Ver Detalle</button>
      </Link>
    </div>
  );
}

export default Product;
