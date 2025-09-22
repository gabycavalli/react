import Product from './product';
import '../styles/productContainer.css';

function ProductContainer() {
  return (
    <section className="product-container">
      {/* <h2>DCU Comics</h2> */}
      <Product
        title="Superman: For All Seasons"
        price="$100"
        img="https://static0.cbrimages.com/wordpress/wp-content/uploads/2017/03/Superman-Camelot-Falls.jpg?q=50&fit=contain&w=750&h=422&dpr=1.5"
      />
      <Product
        title="JLA: New World Order"
        price="$200"
        img="https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/03/JLA-new-world-order.jpg?q=50&fit=contain&w=750&h=422&dpr=1.5"
      />
      <Product
        title="TJLA: World War III"
        price="$300"
        img="https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/02/JSA-Justice-Be-Done.jpg?q=50&fit=contain&w=750&h=422&dpr=1.5"
      />
      <Product
        title="Green Lantern's War Of Light Is The Greatest Green Lantern Epic Of Them All"
        price="$50"
        img="https://static0.cbrimages.com/wordpress/wp-content/uploads/2017/01/Sinestro-Corps-War.jpg?q=50&fit=contain&w=750&h=422&dpr=1.5"
      />
    </section>
  );
}

export default ProductContainer;
