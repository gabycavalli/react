import '../styles/header.css';
import CardWidget from './cardWidget';

function Header() {
  return (
    <header className="header">
      <h1>Tienda de Comics</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Acerca de</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
      <CardWidget />
    </header>
  );
}
export default Header;
