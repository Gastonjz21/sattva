import './navbar.css'

function NavBar() {
  return (
    <div id="menu" class="navegacion">
      <nav>
        <ul>
          <li class="nos">
            <a href="#nosotros">Nosotros</a>
          </li>
          <li class="mar">
            <a href="#marcas">Marcas</a>
          </li>
        </ul>

        <ul>
          <li class="pro">
            <a href="products.html">Productos</a>
          </li>
          <li class="con">
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
