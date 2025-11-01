import '../styles/header.css';
import CardWidget from './cartWidget';
import { Link } from 'react-router';

function Header() {
  return (
    <header className="header">
      <h1>Tienda de Comics</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/category/marvel">Marvel Comics</Link>
          </li>
          <li>
            <Link to="/category/DC">DC Comics</Link>
          </li>
          <li>
            <Link to="others/">Otros Productos</Link>
          </li>
          <li>
            <Link to="contacts/">Contacto</Link>
          </li>
          <li>
            <Link to="details/">Detalles</Link>
          </li>
        </ul>
      </nav>
      <CardWidget />
    </header>
  );
}
export default Header;
