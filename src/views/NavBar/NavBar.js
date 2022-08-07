import './navbar.css'
import {Link} from 'react-scroll'

function NavBar() {
  return (
    <div id="menu" class="navegacion">
      <nav>
        <ul>
          <li class="nos">
            <Link to="nosotros" spy={true} smooth={true} offset={-100} duration={500}>Nosotros</Link>
          </li>
          <li class="mar">
          <Link to="marcas" spy={true} smooth={true} offset={-80} duration={500}>Marcas</Link>
          </li>
        </ul>

        <ul>
          <li class="pro">
            <a href="products.html">Productos</a>
          </li>
          <li class="con">
          <Link to="contacto" spy={true} smooth={true} offset={-100} duration={500}>Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
