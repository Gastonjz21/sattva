import "./navbar.css";
import { Link } from "react-scroll";
import Records from '../records.json'

function NavBar() {
  return (
    <div id="menu" class="navegacion">
      <div className="inner">
        {Records &&
          Records.map((record) => {
            return (
              <Link to="banner" spy={true} smooth={true} duration={500}>
                <img src={record.icon} alt="" className="logo" />
              </Link>
            );
          })}
      </div>
      <ul>
        <li> 
          <Link to="nosotros" spy={true} smooth={true} offset={-100} duration={500}>Nosotros</Link> 
        </li>

        <li> 
          <Link to="services" spy={true} smooth={true} offset={-100} duration={500}>Servicios</Link> 
        </li>

        <li>
          <Link to="marcas" spy={true} smooth={true} offset={-80} duration={500}>Marcas</Link>
        </li>

        <li>
          <Link to="contacto" spy={true} smooth={true} offset={-100} duration={500}>Contacto</Link>
        </li>
        
        <li>
          <a href="products.html">Productos</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
